import _ from 'lodash'

export function prefixPath (path, prefix) {
    return `/${prefix}/${_.trim(path, '/')}`
}

export function loadAsset(filename, filetype) {
    let fileref = null
    if (filetype==="js"){ //if filename is a external JavaScript file
        fileref=document.createElement('script')
        fileref.setAttribute("type","text/javascript")
        fileref.setAttribute("src", filename)
    }
    else if (filetype==="css"){ //if filename is an external CSS file
        fileref=document.createElement("link")
        fileref.setAttribute("rel", "stylesheet")
        fileref.setAttribute("type", "text/css")
        fileref.setAttribute("href", filename)
    }
    if (fileref) {
        document.getElementsByTagName("head")[0].appendChild(fileref)
    }
}

export function removeAsset(filename, filetype){
    var targetelement=(filetype==="js")? "script" : (filetype==="css")? "link" : "none" //determine element type to create nodelist from
    var targetattr=(filetype==="js")? "src" : (filetype==="css")? "href" : "none" //determine corresponding attribute to test for
    var allsuspects=document.getElementsByTagName(targetelement)
    for (var i=allsuspects.length; i>=0; i--){ //search backwards within nodelist for matching elements to remove
    if (allsuspects[i] && allsuspects[i].getAttribute(targetattr)!==null && allsuspects[i].getAttribute(targetattr).indexOf(filename)!==-1)
        allsuspects[i].parentNode.removeChild(allsuspects[i]) //remove element by calling parentNode.removeChild()
    }
}