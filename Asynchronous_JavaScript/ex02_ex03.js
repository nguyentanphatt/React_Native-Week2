/*For this challenge you will actually have to watch the video! Then, build the image
loading functionality that I just showed you on the screen.
Your tasks:
Tasks are not super-descriptive this time, so that you can figure out some stuff by
yourself. Pretend you're working on your own �
PART 1
1. Create a function 'createImage' which receives 'imgPath' as an input.
This function returns a promise which creates a new image (use
document.createElement('img')) and sets the .src attribute to the
provided image path
2. When the image is done loading, append it to the DOM element with the
'images' class, and resolve the promise. The fulfilled value should be the
image element itself. In case there is an error loading the image (listen for
the'error' event), reject the promise
3. If this part is too tricky for you, just watch the first part of the solution */

function createImage(imgPath){
    return new Promise((resolve, reject) => {
        const img = document.createElement('img');
        img.src = imgPath;
        img.addEventListener('load', () => {
            document.querySelector('.images').appendChild(img);
            resolve(img);
        });
        img.addEventListener('error', () => {
            reject(new Error('Error loading image'));
        });
    });
}
const img01 = './dice_img.jpg'
const img02 = './dog_img.jpg'
/*PART 2 
4.  Consume the promise using .then and also add an error handler 
5.  After the image has loaded, pause execution for 2 seconds using the 'wait' 
function we created earlier 
6.  After the 2 seconds have passed, hide the current image (set display CSS 
property to 'none'), and load a second image (Hint: Use the image element 
returned by the 'createImage' promise to hide the current image. You will 
need a global variable for that 😉 ) 
7.  After the second image has loaded, pause execution for 2 seconds again 
8.  After the 2 seconds have passed, hide the current image  */
const wait = ms => new Promise(resolve => setTimeout(resolve, ms));
createImage(img01)
    .then((firstImg) => {
        return wait(2000)
            .then(() => {
                firstImg.style.display = 'none';
                return createImage(img02);
            })
            .then((secondImg) => {
                return wait(2000)
                    .then(() => {
                        secondImg.style.display = 'none';
                    });
            });
    })
    .catch((error) => {
        console.error('Error:', error);
});

/*PART 1 
1.  Write an async function 'loadNPause' that recreates Challenge #2, this time 
using async/await (only the part where the promise is consumed, reuse the 
'createImage' function from before) 
2.  Compare the two versions, think about the big differences, and see which one 
you like more 
3.  Don't forget to test the error handler, and to set the network speed to “Fast 3G” 
in the dev tools Network tab  */
async function loadNPause() {
    try {
        const firstImg = await createImage(img01);
        await wait(2000);
        firstImg.style.display = 'none';
        const secondImg = await createImage(img02);
        await wait(2000);
        secondImg.style.display = 'none';
    } catch (error) {
        console.error('Error:', error);
    }
}
loadNPause();
/*PART 2 
1.  Create an async function 'loadAll' that receives an array of image paths 
'imgArr' 
2.  Use .map to loop over the array, to load all the images with the 
'createImage' function (call the resulting array 'imgs') 
3.  Check out the 'imgs' array in the console! Is it like you expected? 
4.  Use a promise combinator function to actually get the images from the array 😉  
5.  Add the 'parallel' class to all the images (it has some CSS styles)  */
async function loadAll(imgArr) {
    try {
        const imgs = imgArr.map(img => createImage(img));
        const loadedImgs = await Promise.all(imgs);
        
        console.log(loadedImgs);
        loadedImgs.forEach(img => img.classList.add('parallel'));
    } catch (error) {
        console.error('Error:', error);
    }
}
//loadAll(['./dice_img', './dog_img']);
