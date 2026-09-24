# ${{ values.name }}

## Overview

${{ values.description }}

## Running locally

`docker build -t ${{ values.name }} . && docker run -p 8000:8000 ${{ values.name }}`
