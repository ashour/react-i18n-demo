import { defaultLocale } from '../../config/i18n'
import { prefixPath, loadAsset, removeAsset } from '../util'

export function localizeRoutes (routes) {
    return routes.map(route => {
        // we default to localizing
        if (route.localize !== false)  { 
            return {
               ...route,
               path: prefixPath(route.path, ':locale')
            }
        }

        return { ...route }
    })
}

export function getLocaleFromPath(path) {
    if (path === "/") {
        return defaultLocale
    }
    
    return path.split('/')[1]
}

export function switchHtmlLocale (locale, dir, opt = {}) {
    const html =  window.document.documentElement

    html.lang = locale
    html.dir = dir

    if (opt.withRTL) {
        if (dir === 'rtl') {
            opt.withRTL.forEach(stylesheetURL => loadAsset(stylesheetURL, 'css'))
        } else {
            opt.withRTL.forEach(stylesheetURL => removeAsset(stylesheetURL, 'css'))
        }
    }
}

export function formatDate (value, format, locale) {
    // we transform "foo:bar;baz:man" into { foo: bar, baz: man }
    const options = {}
    format.split(';').forEach(part => {
        const [key, value] = part.split(':')
        options[key.trim()] = value.trim()
    })

    try {
        return new Intl.DateTimeFormat(locale, options).format(value)
    } catch (err) {
        console.error(err)
    }
}