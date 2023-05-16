export const mediaCSS = `
@media screen and (min-device-width: 450px), screen and (min-width: 450px) {
  /* header */
  .headerTopCell {
    padding: 25px 35px !important;
  }

  .dateCell {
    font-size: 16px !important;
  }

  .mainTitle {
    font-size: 25px !important;
  }

  /* paddings */
  .mainContentCell {
    padding: 24px 35px 35px 35px !important;
  }

  /* footer */
  .footerInsiderCell {
    padding: 35px !important;
  }

  .becomeAnInsiderButton {
    padding: 15px 50px !important;
  }

  .footerBottomCell {
    padding: 25px 35px 17px !important;
  }
}

@media screen and (max-device-width: 450px), screen and (max-width: 450px) {
  /* header */
  .headerTopCell {
    padding: 15px !important;
  }

  .dateCell {
    font-size: 13px !important;
  }

  .mainTitle {
    font-size: 21px !important;
  }

  /* paddings */
  .mainContentCell {
    padding: 24px 15px 35px !important;
  }

  /* footer */
  .footerInsiderCell {
    padding: 35px 15px !important;
  }

  .becomeAnInsiderButton {
    padding: 15px 30px !important;
  }

  .footerBottomCell {
    padding: 25px 15px 17px !important;
  }
}`