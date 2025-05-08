# Exemplar

By updating your biographical page to use Bootstrap, your new page should be similar to the image below.  

![Example of Bio webpage with Bootstrap](https://d3c33hcgiwev3.cloudfront.net/imageAssetProxy.v1/EQnW9QNtQhGJ1vUDbTIRLA_7dd180d9248d43b688d3822c765655e1_m4l1_exemplar.png?expiry=1746835200000&hmac=vFvrUDzSBwrJO9Xl8NdFTSr_dvmOCT1JHtVIHddwLWg)

Your HTML file structure and content should be similar to the snippet below. Note where the Bootstrap CSS classes were used in the different HTML elements. 

```html
<!DOCTYPE html>
<html>
    <head>
        <title>My Bio Page</title>
        <link href="bootstrap.min.css" rel="stylesheet">
    </head>
    <body>
        <div class="container">
            <div class="row">
                <div id="bio" class="col-12 col-lg-6 text-center">
                    <h1>Jane</h1>
                    <img src="photo.jpg" class="img-fluid" />
                </div>
                <div id="more" class="col-12 col-lg-6">
                    <h2>Favorite Music Artists</h2>
                    <ul>
                        <li>Metallica</li>
                        <li>Bob Marley</li>
                        <li>Madonna</li>
                        <li>The Beatles</li>
                        <li>Pink Floyd</li>
                    </ul>
                    <h2>Favorite Films</h2>
                    <ol>
                        <li>Pulp Fiction</li>
                        <li>The Godfather</li>
                        <li>The Lord of the Rings</li>
                        <li>Iron Man</li>
                        <li>Inception</li>
                    </ol>
                    <a href="https://www.meta.com/user/123" class="btn btn-primary">My Meta Profile</a>
                </div>
            </div>
        </div>
        <script src="bootstrap.bundle.min.js"></script>
    </body>
</html>
```

As a developer, Bootstrap is one of the many libraries in your toolkit to help build web applications. Bootstrap has many utilities and components. We encourage you to read their documentation and experiment further with styling your webpage.
