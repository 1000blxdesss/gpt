export const createFooterHeaderTemplate = ({
    header,
    button: {href, title},
}) => {
    const template = `
        <h1 class="footer_header">
            ${header}
        </h1>
        <button class="header_button" onclick="window.location.href='${href}'">
            ${title}
        </button>
    `;

    return template;
};

export const createFooterLeftInfoItem = ({title}) => {
    return `
    <li class="info_item">
        ${title}
    </li>
    `;
};

export const createFooterLeftInfoTemplate = (LeftInfoData) => {
    const template =  LeftInfoData
        .map((item) => createFooterLeftInfoItem(item))
        .join("");
    
    return template;
};

export const createFooterLeftTemplate = ({
    image:{src, alt},
    footerLeftInfoData,
}) => {
    const footeLeftInfoTemplate = createFooterLeftInfoTemplate(footerLeftInfoData);
    
    const template =`
        <li class="info_left_header">
            <img class="info_left_header" src="${src}" alt="${alt}">
        </li>
        ${footeLeftInfoTemplate}      
    `;
    return template;
};
export const createFooterFirstInfoItem = ({
    title,
    href
}) => {
    return `
    <li class="info_item">
        <a href="${href}" class="lined_cta footer_cta">${title}</a>
    </li>
    `;
};

export const createFooterFirstInfoTemplate = (firstInfoData) => {
    const firstInfoTemplate = firstInfoData
        .map((item) => createFooterFirstInfoItem(item))
        .join("");
    return firstInfoTemplate;
};

export const createFooterFirstTemplate = ({header, footerFirstInfoData}) => {
    const footerFirstInfoTemplate = createFooterFirstInfoTemplate(footerFirstInfoData);
    
    const template = `
    <li class="info_header">
        ${header}
    </li>
        ${footerFirstInfoTemplate}
    `;
    return template;
};

export const createFooterSecInfoItem = ({
    title,
    href
}) => {
    return `
    <li class="info_item">
        <a href="${href}" class="lined_cta footer_cta">${title}</a>
    </li>
    `;
};

export const createFooterSecInfoTemplate = (secInfoData) => {
    const secInfoTemplate = secInfoData
        .map((item) => createFooterSecInfoItem(item))
        .join("");
    return secInfoTemplate;
};

export const createFooterSecTemplate = ({header, footerSecInfoData}) => {
    const footerSecInfoTemplate = createFooterSecInfoTemplate(footerSecInfoData);
    
    const template = `
    <li class="info_header">
        ${header}
    </li>
        ${footerSecInfoTemplate}
    `;
    return template;
};

export const createFooterThirdInfoItem = ({title}) => {
    return `
    <li class="info_item">
        ${title}
    </li>
    `;
};

export const createFooterThirdInfoTemplate = (thirdInfoData) => {
    const thirdInfoTemplate = thirdInfoData
        .map((item) => createFooterThirdInfoItem(item))
        .join("");
    return thirdInfoTemplate;
};

export const createFooterThirdTemplate = ({header, footerThirdInfoData}) => {
    const footerThirdInfoTemplate = createFooterThirdInfoTemplate(footerThirdInfoData);
    
    const template = `
    <li class="info_header">
        ${header}
    </li>
        ${footerThirdInfoTemplate}
    `;
    return template;
};

export const createFooterRightTemplate = ({
    footerFirstData,
    footerSecData,
    footerThirdData,
}) => {
    const footerFirstTemplate = createFooterFirstTemplate(footerFirstData);
    const footerSecTemplate = createFooterSecTemplate(footerSecData);
    const footerThirdTemplate = createFooterThirdTemplate(footerThirdData);
    const template = `
        <ul class="first_info_list">
            ${footerFirstTemplate}
        </ul>
        <ul class="sec_info_list">
            ${footerSecTemplate}
        </ul>
        <ul class="third_info_list">
            ${footerThirdTemplate}
        </ul>
    `;
    return template;
};

export const createFooterInfoTemplate = ({
    footerLeftData,
    footerRightData,
}) => {
    const footerLeftTemplate = createFooterLeftTemplate(footerLeftData);
    const footerRightTemplate = createFooterRightTemplate(footerRightData);
    const template = `
    <ul class="info_left_list">
        ${footerLeftTemplate}
    </ul>
    <div class="info_right">
        ${footerRightTemplate}
    </div>`;
    return template;
};

export const footerTemplate = ({
    footerHeaderData,
    footerInfoData,
    footerRightsReservedData,
}) => {
    const footerHeaderTemplate = createFooterHeaderTemplate(footerHeaderData);
    const footerInfoTemplate = createFooterInfoTemplate(footerInfoData);
    const resultTemplate = `
        <div class="footer_section_header">
            ${footerHeaderTemplate}
        </div>
        <div class="footer_section_info">
            ${footerInfoTemplate}
        </div>
        <p class="rights_reserved">${footerRightsReservedData}</p>
    `;
    return resultTemplate;
};