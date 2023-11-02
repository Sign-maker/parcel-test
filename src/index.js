// const img = './images/b11-2.jpg?as=avif&width=800';
// import image from './images/b11-2.jpg?as=avif&width=800';
// import * as files from './files/*.js';
// import * as images from './images/*.jpg?as=avif&width=800';
// console.log(images);
// import * as images from './images/b11-2.jpg';
// const keys = Object.keys(images);
// for (const key of keys) {
//   console.log(images[key]);
//   const imageUrl = new URL(`${images[key]}?as=avif&width=800`, import.meta.url);
//   console.log(imageUrl);
// }

// console.log(image);

// console.log(images);

const testWrapper = document.querySelector('.test');

// // const imgages = ['./images/b11-2.jpg'];
// const images = ['./images/b11-2.jpg?as=avif&width=800'];
// const imageUrl = new URL(`${images.b11-2}`, import.meta.url);

// const img = './images/b11-2.jpg';
// const imageUrl = new URL(
//   `./images/b11-2.jpg?as=avif&width=800`,
//   import.meta.url
// );
// console.log(imageUrl);
// const img = './images/b11-2.jpg';
// const imageUrl = new URL(`${img}?as=avif&width=800`, import.meta.url);
// const img = './images/b11-2.jpg';
// const imageUrl = `${img}?as=avif&width=800`;
// console.log(import.meta.url);
// const imageUrl = new URL(image, import.meta.url);
// console.log(imageUrl);

// function markUp(elem, imgPath) {
//   const markUpStr = `  <picture>
//       <source
//         srcset="
//       ${new URL(`${images['b11-2']}?as=avif&width=800`, import.meta.url)}  1x,
//       ${new URL(`${images['b11-2']}?as=avif&width=1920`, import.meta.url)}  2x,
//       ${new URL(`./images/b11-2.jpg?as=avif&width=1920`, import.meta.url)}  3x,
//     "
//         type="image/avif"
//       />

//       <img src="${new URL(
//         `${images['b11-2']}?width=200`,
//         import.meta.url
//       )}" alt="test image" />
//     </picture>`;
//   elem.innerHTML = markUpStr;
// }
// markUp(testWrapper, './images/b11-2.jpg');
//   <source
//     srcset="
//     ${new URL(`${image}?as=webp&width=500`, import.meta.url)}  1x,
//     ${new URL(`${image}?as=webp&width=1920`, import.meta.url)}  2x,
// "
//     type="image/webp"
//   />
//   <source
//     srcset="
//     ${new URL(`${image}?width=400`, import.meta.url)}  1x,
//     ${new URL(`${image}?width=1920`, import.meta.url)}  2x,
// "
//     type="image/jpeg"
//   />

markUp(testWrapper, './images/b11-5-big.jpg');

function markUp(elem, imgPath) {
  const markUpStr = `  <picture>
      <source
        srcset="${imgPath}"
        type="image/jpeg"
      />

      <img src="${imgPath}" alt="test image" />
    </picture>`;
  elem.innerHTML = markUpStr;
}
