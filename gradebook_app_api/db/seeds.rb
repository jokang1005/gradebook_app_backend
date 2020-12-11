# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
100.times do
    StudentProfile.create(
        student_id: Faker::Number.number(digits: 6),
        name: Faker::Name.name,
        address: Faker::Address.full_address,
        guardian1: Faker::Name.name,
        guardian1_number: Faker::PhoneNumber.cell_phone,
        guardian2: Faker::Name.name,
        guardian2_number: Faker::PhoneNumber.cell_phone
    )
end

puts "Seeded database"