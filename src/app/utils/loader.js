/* ============
 * Loader Util
 * ============
 *
 * Loader util to prevent relative directory hell
 */

export default {
  /**
   * Method used to load a page
   *
   * @param main The name of the main page
   * @param page The name of the page
   *
   * @returns {*} The page
   */
  page(main, page) {
    return require(`./../pages/${main}/${page}/${page}.vue`);
  },

  /**
   * Method used to load a layout
   *
   * @param layout The name of the layout
   *
   * @returns {*} The layout
   */
  layout(layout) {
    return require(`./../layouts/${layout}/${layout}.vue`);
  },

  /**
   * Method used to load a layout
   *
   * @param component The name of the layout
   *
   * @returns {*} The layout
   */
  component(component) {
    return require(`./../components/${component}/${component}.vue`);
  },
};
