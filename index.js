import inquirer from 'inquirer';
import qr from "qr-image";
import fs from 'fs';

inquirer
    .prompt([
        {
            message: "Type in your url",
            name: "URL",
        },
    ])
    .then((answers) => {
        const url = answers.URL;
        let qrImg = qr.image(url);
        qrImg.pipe(fs.createWriteStream("qr_img.png"));

        fs.writeFile("URL.txt", url, (err) => {
            if (err) throw err;
            console.log("Successfully written!");
        })
    })
    .catch((error) => {
        if (error) {
            console.log("Success");
        } else {
            console.log("Error happened");
        }
    });
