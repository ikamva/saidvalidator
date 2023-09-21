<h1 align="center">SA ID VALIDATOR</h1>

## ℹ️️ Description

This package validates South African ID

<br>

## 🔧 How to Install

Install using npm:

```
npm install @ikamva/saidvalidator
```

Install using yarn:

```
yarn add @ikamva/saidvalidator

```
Install using pnpm:

```
pnpm add @ikamva/saidvalidator

```

<br>

## 👨🏻‍🏫 How to Use

### Get full details
```ts
import { validateSAID }  from "@ikamva/saidvalidator";

// Get all details if valid
const saIDData = validateSAID("8802016006082"); // {valid: true, gender: 'Male', citizenship: 'SA'}


// If invalid
// Gender and Citizenship will be undefined
const saIDData = validateSAID("8802016006082"); // {valid: false}

```

### Check Valid ID Only
```ts
import { isSAID }  from "@ikamva/saidvalidator";

// Check if valid sa id only
const isValid = isSAID("8802016006082"); // true
```

### Get Gender and Citizenship 
```ts
import { getCitizenship , getGender }  from "@ikamva/saidvalidator";

const gender = getGender("8802016006082"); // Male 
const citizen = getCitizenship("8802016006082"); // SA 
```
<br>

## 💁🏻 Contributing

This is an open source project. Any contribution would be greatly appreciated!
