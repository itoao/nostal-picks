/**
 * YYYY-MM-DD形式の日付情報を返却する
 */
function formatDate (date = new Date()) {
  const clone = new Date(date)

  // タイムゾーンを補正
  clone.setMinutes(clone.getMinutes() - clone.getTimezoneOffset())

  // ハイフンでセパレートされた日付部分を取得
  return clone.toISOString().substring(0, 10)
}

export function useFormatter () {
  return {
    formatDate
  }
}
