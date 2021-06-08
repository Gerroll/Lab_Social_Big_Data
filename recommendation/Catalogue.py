import pandas as pd

class Singleton(type):
    _instances = {}
    def __call__(cls, *args, **kwargs):
        if cls not in cls._instances:
            cls._instances[cls] = super(Singleton, cls).__call__(*args, **kwargs)
        return cls._instances[cls]

class Catalogue(metaclass=Singleton):

    def __init__(self):
        print("Loading CSV")
        self.df = pd.read_csv("catalogue/catalogue.csv", sep=';')
        self.category_list = self.df["category"].unique()

    def get_best_products_in_category(self, category_name="Musique, CD, Vinyles", n_product_to_return=1):
        """ Get a list best product in a category based on review score and number of reviewers

            Keyword arguments:
            category_name -- category's name where to search
            n_product_to_return -- number of product to return in the list
        """
        products_in_category = self.df.loc[self.df['category'] == category_name]

        total_socre_col = products_in_category.apply(self._calculate_total_score, axis=1) # get column data with an index

        products_in_category_with_total_score = products_in_category.assign(total_score=total_socre_col.values) # assign values to column 'total_score'

        sorted_product_list = products_in_category_with_total_score.sort_values(by="total_score", ascending=False)

        return sorted_product_list[0 : n_product_to_return]


    def _calculate_total_score(self, product):
        return product["review"] * product["reviewNumber"]



if __name__ == "__main__":
    c = Catalogue()
    sorted_product_list = c.get_best_products_in_category(n_product_to_return=3)
    print(sorted_product_list)
