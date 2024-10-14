export const createImageTemplate = ({ src, alt }) => {
  return `
    <img src="${src}" alt="${alt}" class="futur_pic">
  `;
};

export const createDostup = (text) => {
  return `
    <p class="dostup">${text}</p>
  `;
};

export const createOzhid = (title) => {
  return `
    <h1 class="ozhid">${title}</h1>
  `;
};

export const createDescriptionTemplate = (description) => {
  return `
    <p class="odnako">${description}</p>
  `;
};

export const createhz_tozhe_dostup = (text) => {
  return `
    <p class="hz_tozhe_dostup">${text}</p>
  `;
};

export const createRightPartTemplate = ({
  uptxt,
  hz,
  SHLISHKOM_MNOGO_BYKV,
  downtxt,
}) => {
  const headerTemplate = createDostup(uptxt);
  const titleozhid = createOzhid(hz);
  const descriptionTemplate = createDescriptionTemplate(SHLISHKOM_MNOGO_BYKV);
  const tozhe_dostup = createhz_tozhe_dostup(downtxt);

  return `
    <div class="right__container">
      <div class="text-container">
        ${headerTemplate}
        ${titleozhid}
        ${descriptionTemplate}
        ${tozhe_dostup}
      </div>
    </div>
  `;
};

export const futureHereTemplate = ({ left_part, right_part }) => {
  const imageTemplate = createImageTemplate(left_part[0]);
  const rightPartTemplate = createRightPartTemplate(right_part[0]);

  const resultTemplate = `
    <div class="future_here__left">
      ${imageTemplate}
    </div>
    <div class="future_here__right">
      ${rightPartTemplate}
    </div>
  `;

  return resultTemplate;
};