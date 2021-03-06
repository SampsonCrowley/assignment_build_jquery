$ = $ || function jQuery(){};
$p = $.prototype;

$.hasClass = function(el, className) {
  return el.classList.contains(className);
};

$p.hasClass = function(className) {
  return this.any(function(el){
    return $.hasClass(el, className);
  });
};

$p.addClass = function(className) {
  this.each(function(el) {
    if (!$.hasClass(el, className)) {
      el.classList.add(className);
    }
  });
  return this;
};

$p.removeClass = function(className) {
  this.each(function(el) {
    el.classList.remove(className);
  });
  return this;
};

$p.toggleClass = function(className) {
  this.each(function(el) {
    if ($.hasClass(el, className)) {
      el.classList.remove(className);
    } else {
      el.classList.add(className);
    }
  });
  return this;
};

$p.val = function(val = undefined){
  if(val !== undefined){
    this.each(function(el) {
      el.value = val;
    });
    return this;
  }
  return this.el.idx(0).value;
};

$p.css = function(prop, val = undefined){
  if(val !== undefined){
    this.each(function(el) {
      el.style[prop] = val;
    });
    return this;
  }
  return this.el.idx(0).style[prop];
};

$p.height = function(val = undefined){
  return this.css('height', val);
};

$p.width = function(val = undefined){
  return this.css('width', val);
};

$p.attr = function(attr, val = undefined){
  if (val === null) {
    this.each(function(el) {
      el.removeAttribute(attr);
    });
    return this;
  } else if (val !== undefined) {
    this.each(function(el) {
      el.setAttribute(attr, val);
    });
    return this;
  }
  return this.el.idx(0).getAttribute(attr);
};

$p.html = function(html = undefined) {
  if (html !== undefined) {
    this.each(function(el) {
      el.innerHTML = html;
    });
    return this;
  }
  return this.el.idx(0).innerHTML;
};

$p.text = function(text = undefined) {
  if (text !== undefined) {
    this.each(function(el) {
      el.innerText = text;
    });
    return this;
  }
  return this.el.idx(0).innerText;
};

$p.after = function(el){
  this.each(function(sibling){
    sibling.parentNode.insertBefore(el, sibling.nextSibling)
  })
  return this;
}

$p.append = function(el) {
  this.each(function(parent){
    parent.appendChild(el);
  })
  return this;
}

$p.replaceWith = function(el) {
  this.each(function(parent){
    parent.outerHTML = el.outerHTML;
  })
  return this;
}

$p.remove = function(){
  this.each(function(el){
    el.parentNode.removeChild(el);
  })
}

$p.children = function(){
  return $(this.el.idx(0).childNodes);
}

$p.parent = function(){
  return $(this.el.idx(0).parentNode);
}
