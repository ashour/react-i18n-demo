import i18next from 'i18next'

import { formatDate } from './util'

export const setUiLocale = (locale) => {
    return fetch(`/translations/${locale}.json`)
            .then(response => response.json())
            .then(loadedResources => (
                new Promise((resolve, reject) => {
                    i18next.init({
                        lng: locale,
                        debug: true,
                        resources: { [locale]: loadedResources },
                        interpolation: {
                            format: function (value, format, locale) {
                                if (value instanceof Date) {
                                    return formatDate(value, format, locale)
                                }

                                return value
                            }
                        }
                    }, (err, t) => {
                        if (err) {
                            reject(err)
                            return
                        }

                        resolve()
                    })
                })
            ))
            .catch(err => Promise.reject(err))
}

export const t = (key, opt) => i18next.t(key, opt)
