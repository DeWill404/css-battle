/**
 * Generate minified code for css battle submissions
 *
 * Optimized code based on following points
 *  1. Remove New line
 *  2. Remove ; before }
 *  3. Remove last html closing tag and closing style tag if exist
 *  4. Replace classname with [classname]
 *  5. Remove extra px
 *  6. Remove extra spaces
 *
 * IMPORTANT
 *  1. Place style tag after html code
 *  2. Use single-quote(') instead of double-quote(")
 *  3. Use classes only
 *
 * Copy method in any js interpretor (like brower console)
 * then call minify method with code as string parameter
 * use backtick(`) to create string inorder to preserve new-line
 * Then copy the generater output
 */
function minify(code) {
  /** 1) Remove New line */
  code = code.replaceAll(/\n\s*/g, "");

  /** 2) Remove ; before } */
  code = code.replaceAll(";}", "}");

  /** 3) Remove last html closing tag and closing style tag if exist */
  code = (function () {
    let style_pos = code.indexOf("<style>");
    if (style_pos == -1) {
      let end_closing = code.lastIndexOf("</");
      return code.slice(0, end_closing);
    } else {
      let end_closing = code.slice(0, style_pos).lastIndexOf("</");
      return (
        code.slice(0, end_closing) + code.slice(style_pos, code.length - 8)
      );
    }
  })();

  /** 4) Replace classname with [classname] */
  code = (function () {
    let temp_code = code;
    // Extract classnames
    let classNames = temp_code.match(/\.[\w-]+/g);
    if (!classNames) {
      return temp_code;
    }
    classNames = classNames.map((c) => c.slice(1));
    classNames.sort();
    classNames.reverse();

    // replace classnames
    for (let classname of classNames) {
      let re = new RegExp(`\\.${classname}(?![\\w-\\]])`, "g");
      temp_code = temp_code.replaceAll(re, `[${classname}]`);
    }

    // remove . from class-selectors
    temp_code = temp_code.replaceAll(/\.\[/g, "[");

    // Remove class attribute from html
    let classname_reg = /class='/g;
    let matcher;
    while ((matcher = classname_reg.exec(temp_code)) != null) {
      if (matcher.index == classname_reg.lastIndex) {
        classname_reg.lastIndex++;
      }
      // match.index -> start of class keyword
      // classname_end -> end of class keyword
      let classname_end =
        matcher.index + 7 + temp_code.slice(matcher.index + 7).indexOf("'");

      // save string with removed class attribute
      let pre = temp_code.slice(0, matcher.index);
      let class_name = temp_code.slice(matcher.index + 7, classname_end);
      let post = temp_code.slice(classname_end + 1);
      temp_code = pre + class_name + post;
    }
    return temp_code;
  })();

  /** 5) Remove extra px */
  code = code.replaceAll(/(?<=\d+)px(?!\s)/g, "");

  /** 6) Remove extra spaces */
  code = code.replaceAll(/:\s+/g, ":");
  code = code.replaceAll(/\s+{/g, "{");

  return code;
}