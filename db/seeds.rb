# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Bench.destroy_all
b1 = Bench.create(description: "Sam waits for the ferry here", lat: 37.795257, lng: -122.392189)
b2 = Bench.create(description: "nice park. lots of folks passing through", lat: 37.796065, lng: -122.395625)
b3 = Bench.create(description: "there's probably a bench here", lat: 37.781310, lng: -122.387973)
