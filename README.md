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
import { validateSAID, Validate }  from "@ikamva/saidvalidator";

// Get all details if valid
const saIDData: Validate = validateSAID("1601016372082"); // {valid: true, gender: 'Male', citizenship: 'SA', dob: '01-01-2016'}


// If invalid
const saIDData: Validate = validateSAID("1601016372081"); // {valid: false, gender: 'Invalid ID', dob: 'Invalid ID', citizenship: 'Invalid ID'}

```

### Check Valid ID Only
```ts
import { isSAID }  from "@ikamva/saidvalidator";

// Check if valid sa id only
const isValid = isSAID("1601016372082"); // true
```

### Get D.O.B 
```ts
import { getDOB }  from "@ikamva/saidvalidator";

// returns DD-MM-YYYY or 'Invalid ID'
const gender = getDOB("1601016372082"); // 01-01-2016 
```

### Get Gender 
```ts
import { getGender }  from "@ikamva/saidvalidator";

// returns 'Male' or 'Female' or 'Invalid ID'
const gender = getGender("1601016372082"); // Male 
```

### Get Citizenship 
```ts
import { getCitizenship }  from "@ikamva/saidvalidator";

// returns 'SA' or 'Other' or 'Invalid ID'
const citizen = getCitizenship("1601016372082"); // SA 
```
<br>

## 💁🏻 Contributing

This is an open source project. Any contribution would be greatly appreciated!
