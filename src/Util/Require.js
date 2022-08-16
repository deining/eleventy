const { TemplatePath } = require("@11ty/eleventy-utils");
const { deleteRequireCacheAbsolute } = require("./DeleteRequireCache");

function requireLocal(path) {
  let absolutePath = TemplatePath.absolutePath(path);

  return requireAbsolute(absolutePath);
}

function requireAbsolute(absolutePath) {
  // remove from require cache so it will grab a fresh copy
  deleteRequireCacheAbsolute(absolutePath);

  return require(absolutePath);
}

module.exports.EleventyRequire = requireLocal;
module.exports.EleventyRequireAbsolute = requireAbsolute;