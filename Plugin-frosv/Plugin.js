function groupAwards(awards) {
  const out = {}
  awards.forEach(a => {
    let key = a['group-id']
    // 如果返回没有分组，那么 out 有且只有一个 key 为 __default__key__
    if (key === undefined || key === '') key = ''
    const obj = {
      name: a['award-name'],
      number: a['award-number'],
      content: a['award-content']
    }
    if (key in out) out[key].push(obj)
    else out[key] = [obj]
  })
  return out
}
