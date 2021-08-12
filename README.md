# Lab_Social_Big_Data

## Flask
`python -m venv venv`
`source venv/bin/activate`
`pip install -r requirements.txt`
`flask run`

## Test and Documentation on Postman
https://documenter.getpostman.com/view/4625291/TzeRqAaM

## Catalogue
The catalogue is build by scrapping https://www.fnac.com/

Specificly pages with the "List" format : https://www.fnac.com/Brosse-a-dents-electrique/Soin-dentaire/nsh530912/w-4

- Copy paste the file "scrapping\scrappingList.js" in the web console in the navigator
- It will fetch information and build a CSV that you will be ask to upload
Tip : Open it with VSCode or an other text editor

- Copy paste the content and add it to the "catalogue\catalogue.csv"
- Save the file

Congrast you just added lines in the catalogue.

## Deploying the app with Azur
To add feature to the app, just commit and push on the branch "main"

Azur configuration will automaticaly update and deploy the new version

This link may not work :
https://portal.azure.com/#@b9fec68c-c92d-461e-9a97-3d03a0f18b82/resource/subscriptions/867981e3-cf31-4a6c-99d2-a1977c925dc3/resourceGroups/SHAPSHA-DIN-PLATFORM/providers/Microsoft.Web/sites/giftproposalapi/vstscd

## Actual app link:
https://giftproposalapi.azurewebsites.net/
