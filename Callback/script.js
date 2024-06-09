console.log("Script initializing...");
const fn=() =>{
    console.log("Nothing")
}
const callback=(arg,fn) =>{
    console.log(arg);
    fn();
}

const loadScript=(src,callback) =>{
    let script= document.createElement('script');
    script.src=src;
    script.onload=() => callback("Hello",fn);
    document.head.append(script);
}

loadScript("https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/prism.min.js",callback );