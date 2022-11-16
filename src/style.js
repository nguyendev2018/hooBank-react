const styles = {
  boxWidth: "xl:max-w-[1280px] w-full",

  heading2:
    "font-poppins font-semibold lg:text-[48px] text-[30px] ss:text-[47px] text-white  w-full",
  paragraph:
    "font-poppins font-normal text-dimWhite text-[18px] leading-[178%]",

  flexCenter: "flex justify-center items-center",
  flexStart: "flex justify-center items-start",

  paddingX: "lg:px-16 md:px-10 px-6",
  paddingY: "sm:py-16 py-6",
  padding: "sm:px-16 px-6 sm:py-12 py-4",

  marginX: "sm:mx-16 mx-6",
  marginY: "sm:my-16 my-6",
  wImg500: "max-w-[500px] md:m-auto md:m-0 ",
};

export const layout = {
  section: `grid md:grid-cols-2 grid-cols-1 ${styles.paddingY}`,
  sectionReverse: `flex md:flex-row flex-col-reverse ${styles.paddingY}`,

  sectionImgReverse: `flex  md:mr-10 mr-0 md:mt-0 mt-10 relative`,
  sectionImg: ` md:mt-0 mt-10 relative`,
  textDesc: `text-dimWhite leading-[200%]`,
  sectionInfo: `flex-1 ${styles.flexStart} flex-col`,
};

export default styles;
