module.exports = function(type, block) {
  var copy = block.fn(this)

  if (type == "deletion") {
    return copy
      .replace(/<mark(.*?)/g, '<del')
      .replace(/<\/mark>/g, '</del>')
      .replace(/mark-color/g, 'bg-light-pink')
  }

  else if (type == "addition") {
    return copy
      .replace(/mark-color/g, 'bg-light-green')
  }

  else return copy
}