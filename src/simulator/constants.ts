export class Constants {
  static ONE = BigInt(100)
  static ONE_HUNDRED = BigInt(10_000)
  static SQRT_ONE = BigInt(10)

  static ACTION_POINT = BigInt(1_000)

  static PERSONAL_BUILDING_DIVIDER = BigInt(100)
  static COMMUNITY_BUILDING_DIVIDER = BigInt(700)

  static HARVEST_BUILDING_MULTIPLIER = BigInt(250)
  static SURVIVAL_BUILDING_MULTIPLIER = BigInt(150)
  static ATTACK_BUILDING_MULTIPLIER = BigInt(100)
  static DEFENSE_BUILDING_MULTIPLIER = BigInt(100)

  static FOOD_UNIT_PER_MEAT_PCT = BigInt(100) // 1 meat = 1 food
  static FOOD_UNIT_PER_FISH_PCT = BigInt(75) // 0.75 fish = 1 food
  static FOOD_UNIT_PER_FRUIT_PCT = BigInt(50) // 0.5 fruit = 1 food

  static INITIAL_HP = BigInt(10_000) // 100 HP

  static INITIATIVE_BONUS_PCT = BigInt(120) // 1200/1000 = 1.2 = 120%
  static BASE_DAMAGE = BigInt(100) // 1 HP

  static EFFECTIVE_MINING_RATIO = BigInt(2)

  static MAX_FOOD_UNIT_CONSUME = BigInt(1_000)
  static MIN_FOOD_UNIT_CONSUME = BigInt(100)
  static FOOD_CONSUME_PER_MAX_HEALTH_SLOPE = BigInt(1_000) // 1 food per 10 health
  static HEALTH_PER_FOOD_UNIT = BigInt(500) // 1 food = 5 health

  static DISASTER_BASE_DAMAGE = BigInt(100)
  static DISASTER_DAY_DAMAGE_STEP = BigInt(5) // 5 day
  static DISASTER_BASE_CHANCE = BigInt(100) // 1%
  static DISASTER_CHANCE_PER_DAY_SLOPE = BigInt(100) // 1%/d

  static TREE_GROWTH_RATE_R_T = 100n
  static TREE_GROWTH_RATE_FROM_FRUIT_R_F = 60n
  static TREE_CAPACITY_K_T = 40_00n
  static TREE_CAPACITY_FROM_FRUIT_K_F = 100_00n
  static FRUIT_REGEN_RATE_LAMBDA = 800n
  static ANIMAL_FRUIT_CONSUMPTION_RATE_ALPHA = 50n
  static ANIMAL_REPRODUCTION_RATE_BETA = 10n
  static ANIMAL_DEATH_RATE_GAMMA = 70n
  static FISH_GROWTH_RATE_R_V = 50n
  static FISH_CAPACITY_K_V = 50_00n

  static INITIAL_TREE = 800n
  static INITIAL_ROCK = 500_00n
  static INITIAL_FRUIT = 0n
  static INITIAL_ANIMAL = 2_00n
  static INITIAL_FISH = 10_00n
  static INITIAL_PEARL = 100_00n

  static POINT_PER_DAY_LIVED = BigInt(1_000)
  static POINT_PER_PEARL = BigInt(1_000)
  static POINT_PER_BUILDING = BigInt(100)
  static POINT_PER_STATUE = BigInt(200)
}
