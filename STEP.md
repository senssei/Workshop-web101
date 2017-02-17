# Add some style

In this part we will add some flavor and CSS with Bootstrap.

## Clean up

Remove content on `src\app\app.component.css`

## Install bootstrap

Run in console

```bash
npm install ng2-bootstrap bootstrap --save
```

## Add this to solution

In `` in line #21-23

```json
   "styles": [
        "styles.css",
        "../node_modules/bootstrap/dist/css/bootstrap.min.css"
      ],
```

## Run server again

Run in console

```bash
npm start
```

Looks nicer. :)
