export let findOdds = (a) => {
  return a.filter(x => x%2)
}

// equivalent to {findOdds: findOdds}
let api = {findOdds}

export default api