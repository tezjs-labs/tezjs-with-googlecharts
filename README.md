# Tezjs with Google Charts

- Google chart tools are powerful, simple to use, and free interactive charts and data tools.

- We can use Google Charts with the Tezjs through the below steps.

- Create a fresh tezjs project

```
 npm create tez@latest
```

- Install package for **Google Charts**

```
 npm install vue-google-charts
```


- Now to use **Google Charts** make a **plugins** directory and add **index.ts** inside it after installation.  

- Now you need to register components before you can use them, to do so add the below code


**plugins/index.ts**

```
import {GChart}  from 'vue-google-charts'
```
- make one export default function and add imported modules inside it just as below.

```
export default function(vue:any){
    vue.use(GChart)
}
```

- It's done with tezjs. Now, you can use it inside your project.

- In a current project we have implemented different google charts for example.

- **Note:** For more Understanding about Google Charts read its docs here https://developers.google.com/chart

        