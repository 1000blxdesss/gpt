export const createBlogTitleTemplate = (text) => {
  return `
    <h2 class="blog_title">${text}</h2>
  `;
};

export const createBlogPostWideTemplate = ({
  src,
  alt,
  title,
  data,
  omg,
}) => {
  return `
    <div class="blog_post_wide">
      <img src="${src}" alt="${alt}">
      <div class="blog_post_wide_content">
        <h3 class="blog_post_wide_title">${title}</h3>
        <p class="blog_post_wide_date">${data}</p>
        <p class="blog_post_wide_text">${omg}</p>
      </div>
    </div>
  `;
};

export const createBlogPostSmallTemplate = ({
  src,
  alt,
  title,
  data,
  omg,
}) => {
  return `
    <div class="blog_post_small">
      <img src="${src}" alt="${alt}">
      <div class="blog_post_small_content">
        <h3 class="blog_post_small_title">${title}</h3>
        <p class="blog_post_small_date">${data}</p>
        <p class="blog_post_small_text">${omg}</p>
      </div>
    </div>
  `;
};

export const createBlogPostsSmallTemplate = (blogImg, blogTexts) => {
  return blogImg.slice(1).map((img) => createBlogPostSmallTemplate({
    src: img.src,
    alt: img.alt,
    title: blogTexts[0].title,
    data: blogTexts[0].data,
    omg: blogTexts[0].omg,
  })).join('');
};

export const blogTemplate = ({ blogImg, blogTexts }) => {
  const blogTitleTemplate = createBlogTitleTemplate(blogTexts[0].public);
  const blogPostWideTemplate = createBlogPostWideTemplate({
    src: blogImg[0].src,
    alt: blogImg[0].alt,
    title: blogTexts[0].title,
    data: blogTexts[0].data,
    omg: blogTexts[0].omg,
  });
  const blogPostsSmallTemplate = createBlogPostsSmallTemplate(blogImg, blogTexts);

  const resultTemplate = `
    <section class="blog_section">
      ${blogTitleTemplate}
      <div class="blog_container">
        ${blogPostWideTemplate}
        <div class="blog_posts_small">
          ${blogPostsSmallTemplate}
        </div>
      </div>
    </section>
  `;

  return resultTemplate;
};