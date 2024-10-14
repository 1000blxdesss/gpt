export const createSubtextTemplate = (text) => {
  return `
    <p class="cta_subtext">${text}</p>
  `;
};

export const createTextTemplate = (text) => {
  return `
    <p class="cta_text">
      <strong>${text}</strong><br>
      безграничные возможности.
    </p>
  `;
};

export const createButtonTemplate = (text) => {
  return `
    <div class="cta_button_container">
      <div class="cta_button">${text}</div>
    </div>
  `;
};

export const createCtaContentTemplate = ({
  dostyp,
  text_cta,
  start,
}) => {
  const subtextTemplate = createSubtextTemplate(dostyp);
  const textTemplate = createTextTemplate(text_cta);
  const buttonTemplate = createButtonTemplate(start);

  return `
    ${subtextTemplate}
    ${textTemplate}
    ${buttonTemplate}
  `;
};

export const ctaTemplate = ({ ctaData }) => {
  const subtextTemplate = createSubtextTemplate(ctaData[0].dostyp);
  const textTemplate = createTextTemplate(ctaData[0].text_cta);
  const buttonTemplate = createButtonTemplate(ctaData[0].start);

  const resultTemplate = `
    <section class="cta_section">
      <div class="cta_container">
        <div class="cta_background"></div>
        ${subtextTemplate}
        ${textTemplate}
        ${buttonTemplate}
      </div>
    </section>
  `;

  return resultTemplate;
};