function linearAcceleration(acceleration: number, time: number, speed0: number): { speed: number, distance: number } {
  // v = at + v0
  // v-v0 = at
  // (v-v0) / a = t
  const speed = acceleration * time + speed0
  const distance = 0.5 * acceleration * (time * time) + speed0 * time
  return { speed, distance }
}

console.log(linearAcceleration(3, 30, 0))
