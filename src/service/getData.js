import fetch from '../config/fetch'
import {getStore} from '../config/mUtils'

/**
 *获取验证码
 */
export const getCaptchas = () => fetch('/v1/captchas', {},'POST');
