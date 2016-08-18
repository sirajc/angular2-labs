#!/bin/sh
echo -e "\e[32mPreparing the build...\e[0m"
echo ""
npm run build
echo ""
echo -e "\e[31mCleaning gh-pages\e[0m"
rm -rf gh-pages/*
echo ""
echo -e "\e[32mCopying files\e[0m"
cp -R dist/* gh-pages/
echo -e "\e[32mstaging files in git\e[0m"
cd gh-pages
git add .
echo -e "\e[36m---------------------------------------------------------------\e[0m"
echo -e "\e[32mGit Status ouput\e[0m"
echo ""
git status
echo ""
echo ""
echo -e "\e[36m======================= Manual Steps ===========================\e[0m"
echo "If there are any new assets, add them to sirajc.github.io"
echo "Commit and Push :)"
echo -e "\e[36m================================================================\e[0m"
