const testWrapper = document.querySelector('.test');

const imageUrl = new URL(
  './images/b11-2.jpg?as=avif&width=800',
  import.meta.url
);
console.log(imageUrl);

function markUp(elem) {
  const markUpStr = `  <picture>
      <source
        srcset="
      ${new URL('./images/b11-2.jpg?as=avif&width=800', import.meta.url)}  1x,
      ${new URL('./images/b11-2.jpg?as=avif&width=1920', import.meta.url)}  2x,
    "
        type="image/avif"
      />
      <source
        srcset="
        ${new URL('./images/b11-2.jpg?as=webp&width=500', import.meta.url)}  1x,
        ${new URL(
          './images/b11-2.jpg?as=webp&width=1920',
          import.meta.url
        )}  2x,
    "
        type="image/webp"
      />
      <source
        srcset="
        ${new URL('./images/b11-2.jpg?as=jpeg&width=400', import.meta.url)}  1x,
        ${new URL(
          './images/b11-2.jpg?as=jpeg&width=1920',
          import.meta.url
        )}  2x,
    "
        type="image/jpeg"
      />

      <img src="${new URL(
        './images/b11-2.jpg?as=jpeg&width=200',
        import.meta.url
      )}" alt="test image" />
    </picture>`;
  elem.innerHTML = markUpStr;
}
markUp(testWrapper);
