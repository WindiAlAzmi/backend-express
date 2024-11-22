# API

## Overview
This is a simple Voucher API designed for a backend developer test. 
The API is built using Express for the server framework and MongoDB for data storage.

## ERD Diagram
link : https://app.eraser.io/workspace/ifQtfTojjLpuKxnTP5cm?origin=share

## Table of Contents

1. [Installation & Setup](#installation--setup)
1. [USER](#user)
    - [Create USER](#create-user)
    - [Get Current User](#get-current-user)
    - [Get USER List](#get-all-user)
    - [Get Single USER](#get-single-user)
    - [Update USER](#update-user)
    - [Delete USER](#delete-user)
    - [Delete All USER](#delete-all-user)
2. [BRAND](#brand)
    - [Create BRAND](#create-brand)
    - [Get BRAND List](#get-all-brand)
    - [Get Single BRAND](#get-single-brand)
    - [Update BRAND](#update-brand)
    - [Delete BRAND](#delete-brand)
    - [Delete All BRAND](#delete-all-brand)
3. [VOUCHER](#voucher)
    - [Create VOUCHER](#create-voucher)
    - [Get VOUCHER List](#get-all-voucher)
    - [Get Single VOUCHER](#get-single-voucher)
    - [Update VOUCHER](#update-voucher)
    - [Delete VOUCHER](#delete-voucher)
3. [TRANSACTION](#transaction)
    - [Create TRANSACTION](#create-transaction)
    - [Get TRANSACTION List](#get-all-transaction)
    - [Get Single TRANSACTION](#get-single-transaction)
    - [Update TRANSACTION](#update-transaction)
    - [Delete TRANSACTION](#delete-transaction)
---

## Installation & Setup

### Prerequisites

- **Node.js** and **npm** installed on your machine
- A **MongoDB** database (or any other database) for storing user, course and makeup budget list

### Steps

1. **Clone the Repository**  
   Clone the project to your local machine:

   ```bash
   git clone https://github.com/WindiAlAzmi/backend-express.git
   ```

2. **Install Dependencies**  
   Clone the project to your local machine:

   ```bash
       npm install
   ```

3. **Environment Variables**  
   Create a .env file in the root of the project and set the following environment variables:

   ```bash
      DB_URL=mongodb://localhost:27017/mydb
   ```

4. **Run the Application**  
   Start the development server:

   ```bash
      npm start
   ```

5. **Access API**  
   The API will be running at:

   ```bash
     http://localhost:3000/users
   ```


## User

### Get All User

- Endpoint: GET /users
- Description: get all data users

  Response Body :
  - Status Code : 200

  ```bash
    {
          "message": "Data berhasil ditemukan",
          "data":[]
    }
  ```

### Create User

- Endpoint: POST /users
- Description: create 1 data users

  Request Body :

  ```bash
    {

        "email": "",
        "password": "",
        "name":"",
        "noTelephone":""
    }
  ```

  Response Body :
  - Status Code : 200

  ```bash
    {
          "message": "Data berhasil ditambahkan"
    }
  ```

### Get Single User

- Endpoint: GET /users/{id}
- Description: get single data

  Response Body :
  - Status Code : 200

  ```bash
    {
       message: "1 Data berhasil ditemukan",
       data:{}
    }
  ```

  Error Response :
  - Status Code : 404

  ```bash
    {
         message: "Data tidak ditemukan"
    }
  ```

### Update User

- Endpoint: PUT /users/{id}
- Description: edit 1 data


  Request Body :

  ```bash
    {
     "name":""
    }

  ```

  Response Body :
  - Status Code : 200

  ```bash
    {
       message: "Data berhasil diubah",
       data:{}
    }
  ```

  Error Response :
  - Status Code : 404

  ```bash
    {
        message: "Data tidak ditemukan"
    }
  ```

  - Status Code : 401

  ```bash
    {
        message: "Masukkan token dlu"
    }
  ```

### Delete User

- Endpoint: DEL /users/{id}
- Description: delete 1 data

  Response Body :
  - Status Code : 200

  ```bash
    {
        message: "Data berhasil dihapus"
    }
  ```

  Error Response :
  - Status Code : 404

  ```bash
    {
        message: "Data tidak ditemukan"
    }
  ```

  - Status Code : 500

  ```bash
    {
        message: "Terjadi kesalahan saat menghapus data",
        error:""
    }
  ```

### Delete ALL USER

- Endpoint: DEL /users
- Description: delete all data

  Response Body :
  - Status Code : 200

  ```bash
    {
       message: "Semua data berhasil dihapus"
    }
  ```


## Brand

### Get Brand 

- Endpoint: GET /brand
- Description: get all data brand

  Response Body :
  - Status Code : 200

  ```bash
    {
          "message": "Data berhasil ditemukan",
          "data":[]
    }
  ```

### Create Brand

- Endpoint: POST /brand
- Description: create 1 data users

  Request Body :

  ```bash
    {

        "name":"fegerg",
        "description":"indomrte1"
    }
  ```

  Response Body :
  - Status Code : 200

  ```bash
    {
          "message": "Data berhasil ditambahkan"
    }
  ```

### Get Single Brand

- Endpoint: GET /brand/{id}
- Description: get single data

  Response Body :
  - Status Code : 200

  ```bash
    {
       message: "1 Data berhasil ditemukan",
       data:{}
    }
  ```

  Error Response :
  - Status Code : 404

  ```bash
    {
         message: "Data tidak ditemukan"
    }
  ```

### Update Brand

- Endpoint: PUT /brand/{id}
- Description: edit 1 data


  Request Body :

  ```bash
    {
     "name":""
    }

  ```

  Response Body :
  - Status Code : 200

  ```bash
    {
       message: "Data berhasil diubah",
       data:{}
    }
  ```

  Error Response :
  - Status Code : 404

  ```bash
    {
        message: "Data tidak ditemukan"
    }
  ```

  - Status Code : 401

  ```bash
    {
        message: "Masukkan token dlu"
    }
  ```

### Delete Brand

- Endpoint: DEL /brand/{id}
- Description: delete 1 data

  Response Body :
  - Status Code : 200

  ```bash
    {
        message: "Data berhasil dihapus"
    }
  ```

  Error Response :
  - Status Code : 404

  ```bash
    {
        message: "Data tidak ditemukan"
    }
  ```

  - Status Code : 500

  ```bash
    {
        message: "Terjadi kesalahan saat menghapus data",
        error:""
    }
  ```

### Delete ALL Brand

- Endpoint: DEL /brand
- Description: delete all data

  Response Body :
  - Status Code : 200

  ```bash
    {
       message: "Semua data berhasil dihapus"
    }
  ```


## Voucher

### Get Voucher

- Endpoint: GET /voucher
- Description: get all data voucher

  Response Body :
  - Status Code : 200

  ```bash
    {
          "message": "Data berhasil ditemukan",
          "data":[]
    }
  ```

### Create Voucher

- Endpoint: POST /voucher
- Description: create 1 data voucher

  Request Body :

  ```bash
    {

    "nameVoucher": "voucher family mart",
    "discount": 2000,
    "costInPoints":"10,000",
    "brandId" : "67402a9b32bf05d4f96c5eea"
    }
  ```

  Response Body :
  - Status Code : 200

  ```bash
    {
          "message": "Data berhasil ditambahkan"
    }
  ```

### Get Single Voucher

- Endpoint: GET /voucher/{id}
- Description: get single data

  Response Body :
  - Status Code : 200

  ```bash
    {
       message: "1 Data berhasil ditemukan",
       data:{}
    }
  ```

  Error Response :
  - Status Code : 404

  ```bash
    {
         message: "Data tidak ditemukan"
    }
  ```

### Update Voucher

- Endpoint: PUT /voucher/{id}
- Description: edit 1 data


  Request Body :

  ```bash
    {
     "name":""
    }

  ```

  Response Body :
  - Status Code : 200

  ```bash
    {
       message: "Data berhasil diubah",
       data:{}
    }
  ```

  Error Response :
  - Status Code : 404

  ```bash
    {
        message: "Data tidak ditemukan"
    }
  ```

  - Status Code : 401

  ```bash
    {
        message: "Masukkan token dlu"
    }
  ```

### Delete Voucher

- Endpoint: DEL /voucher/{id}
- Description: delete 1 voucher

  Response Body :
  - Status Code : 200

  ```bash
    {
        message: "Data berhasil dihapus"
    }
  ```

  Error Response :
  - Status Code : 404

  ```bash
    {
        message: "Data tidak ditemukan"
    }
  ```

  - Status Code : 500

  ```bash
    {
        message: "Terjadi kesalahan saat menghapus data",
        error:""
    }
  ```

## Transaction

### Get Transaction 

- Endpoint: GET /transaction/redemption
- Description: get all data voucher

  Response Body :
  - Status Code : 200

  ```bash
    {
          "message": "Data berhasil ditemukan",
          "data":[]
    }
  ```

### Create Transaction

- Endpoint: POST /transaction/redemption
- Description: create 1 data voucher

  Request Body :

  ```bash
    {

     "userId": "67402c6d0426d3e573646d88",
    "voucherId": "67402ab132bf05d4f96c5eed",
    "amount":2,
    "desc":"total for Buy 2 Voucher Indomaret with"
    }
  ```

  Response Body :
  - Status Code : 200

  ```bash
    {
          "message": "Data berhasil ditambahkan"
    }
  ```

### Get Single Transaction

- Endpoint: GET /transaction/redemption/{id}
- Description: get single data

  Response Body :
  - Status Code : 200

  ```bash
    {
       message: "1 Data berhasil ditemukan",
       data:{}
    }
  ```

  Error Response :
  - Status Code : 404

  ```bash
    {
         message: "Data tidak ditemukan"
    }
  ```

### Update Transaction

- Endpoint: PUT /transaction/redemption/{id}
- Description: edit 1 data


  Request Body :

  ```bash
    {
     "amount":""
    }

  ```

  Response Body :
  - Status Code : 200

  ```bash
    {
       message: "Data berhasil diubah",
       data:{}
    }
  ```

  Error Response :
  - Status Code : 404

  ```bash
    {
        message: "Data tidak ditemukan"
    }
  ```

  - Status Code : 401

  ```bash
    {
        message: "Masukkan token dlu"
    }
  ```

### Delete Transaction

- Endpoint: DEL /transaction/redemption/{id}
- Description: delete 1 transaction

  Response Body :
  - Status Code : 200

  ```bash
    {
        message: "Data berhasil dihapus"
    }
  ```

  Error Response :
  - Status Code : 404

  ```bash
    {
        message: "Data tidak ditemukan"
    }
  ```

  - Status Code : 500

  ```bash
    {
        message: "Terjadi kesalahan saat menghapus data",
        error:""
    }
  ```

  
