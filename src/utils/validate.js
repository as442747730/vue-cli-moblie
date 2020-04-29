/**
 * Created by PanJiaChen on 16/11/18.
 */

/**
 * @param {string} path
 * @returns {Boolean}
 */
export function isExternal (path) {
  return /^(https?:|mailto:|tel:)/.test(path)
}

/**
 * @param {string} str
 * @returns {Boolean}
 */
export function validUsername (str) {
  return /^[a-zA-Z0-9_-]{4,16}?$/.test(str)
}

export function isNumber (str) {
  return /^-?\d{0,25}(\.\d{0,2})?$/.test(str)
}
export function isNumber12 (str) {
  return /^-?\d{0,12}(\.\d{0,4})?$/.test(str)
}
export function thirdDecimal (str) {
  return /^\d{0,20}(\.\d{1,3})?$/.test(str)
}
export function secondDecimal (str) {
  return /^\d{0,10}(\.\d{1,2})?$/.test(str)
}
export function positiveInteger (str) {
  return /^\d{0,18}$/.test(str)
}
export function positiveInteger20 (str) {
  return /^\d{0,20}$/.test(str)
}
// 中文、英文、数字包括下划线
export function text (str) {
  return /^[\u4E00-\u9FA5A-Za-z0-9_]{0,50}$/.test(str)
}
// 中文、英文、数字包括下划线
export function text15 (str) {
  return /^[\u4E00-\u9FA5A-Za-z0-9_]{0,15}$/.test(str)
}
// 中文、英文、数字包括下划线
export function text30 (str) {
  return /^[\u4E00-\u9FA5A-Za-z0-9_]{0,30}$/.test(str)
}
export function text100 (str) {
  return /^[\u4E00-\u9FA5A-Za-z0-9_]{0,100}$/.test(str)
}
export function validateNumber (rule, value, callback) {
  if (!value && value !== 0 || !isNumber12(value)) {
    return callback(new Error('请输入数字'))
  } else {
    return callback()
  }
}

export function validateNumberNotRequired (rule, value, callback) {
  if (value) {
    if (!isNumber12(value)) {
      return callback(new Error('请输入数字'))
    } else {
      return callback()
    }
  } else {
    return callback()
  }
}
export function validateThirdDecimal (rule, value, callback) {
  if (!thirdDecimal(value)) {
    return callback(new Error('请输入数字，保留三位小数'))
  } else {
    return callback()
  }
}
export function validateSecondDecimal (rule, value, callback) {
  if (!secondDecimal(value)) {
    return callback(new Error('请输入数字，保留两位小数'))
  } else {
    return callback()
  }
}
export function validatePositiveInteger (rule, value, callback) {
  if (!value || !positiveInteger(value)) {
    return callback(new Error('请输入正整数'))
  } else {
    return callback()
  }
}

export function validatePositiveInteger20 (rule, value, callback) {
  if (!value || !positiveInteger20(value)) {
    return callback(new Error('请输入长度20正整数'))
  } else {
    return callback()
  }
}

export function validateText (rule, value, callback) {
  if (!value || !text(value)) {
    return callback(new Error('请输入中文、英文、数字或下划线'))
  } else {
    return callback()
  }
}
export function validateText15 (rule, value, callback) {
  if (!value || !text15(value)) {
    return callback(new Error('请输入长度15中文、英文、数字或下划线'))
  } else {
    return callback()
  }
}
export function validateText30 (rule, value, callback) {
  if (!value || !text30(value)) {
    return callback(new Error('请输入长度30中文、英文、数字或下划线'))
  } else {
    return callback()
  }
}

export function validateText30NotRequired (rule, value, callback) {
  if (value) {
    if (!text30(value)) {
      return callback(new Error('请输入长度30中文、英文、数字或下划线'))
    } else {
      return callback()
    }
  } else {
    return callback()
  }
}
export function validateText100 (rule, value, callback) {
  if (value) {
    if (!text100(value)) {
      return callback(new Error('请输入长度100中文、英文、数字或下划线'))
    } else {
      return callback()
    }
  } else {
    return callback()
  }
}
