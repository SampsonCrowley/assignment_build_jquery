function Foo() {
  this.sample = true;
  this.southernify = function(text){
    console.log(text + ", Y'all!");
    return text + ", Y'all!";
  };
}

function Bar() {
  return {
    sample: true,
    southernify: function(text){
      console.log(text + ", Y'all!");
      return text + ", Y'all!";
    }
  }
}

function Baz() {
  if(!(this instanceof Baz)){
    return new Baz();
  }
  this.sample = true;
  this.southernify = function(text){
    console.log(text + ", Y'all!");
    return text + ", Y'all!";
  };
}

foo = new Foo();
bar = Bar();
baz = Baz();
// console.log(baz instanceof Baz);
// console.log(bar instanceof Bar);
// console.log(foo instanceof Foo);
// console.log(foo);
// console.log(bar);
// console.log(baz);


var SimpleObject = function(arr = [], funct = null) {

  if(!(this instanceof SimpleObject)){
    return new SimpleObject(arr);
  }

  this.collection = [];

  // Instance method of each
  this.each = function(funct){
    console.log(this.collection);
    for(i = 0; i < this.collection.length; i++){
      funct(this.collection[i], i);
    }
    return this.collection;
  };

  if((typeof arr === 'object' || typeof arr === 'string') && arr.length > 0){
    console.log('57 ran');
    for(i = 0; i < arr.length; i++){
      this.collection.push(arr[i])
    }
  }

}

// Class method of each
SimpleObject.each = function(array, funct) {
  for (var i = 0; i < array.length; i++) {
    funct(array[i], i);
  }
  return array;
};

s = new SimpleObject([1,2,3]);

console.log(SimpleObject);