import mongoose from 'mongoose'

const {Schema} = mongoose

const PolicySchema = new Schema({
    policyId: { type: String },
    dateOfPurchase: { type: String, default: null },
    customerId: { type: String },
    fuel: { type: String, default: null },
    vehicleSegment: {type: String, default: null},
    premium: {type: String, default: null},
    bodilyInjuredLiability: {type: Boolean, default: null},
    personalInjuryProtection: {type: Boolean, default: null},
    propertyDamageLiability: {type: Boolean, default: null},
    collision: {type: Boolean, default: null},
    comprehensive: {type: Boolean, default: null},
    customerGender: {type: Boolean, default: null},
    customerIncomeGroup: {type: String, default: null},
    customerRegion: {type: String, default: null},
    customerMaritalStatus: {type: Boolean, default: false},
})

PolicySchema._queryParams = {
    populate: '',
    select: `policyId dateOfPurchase customerId fuel vehicleSegment premium bodilyInjuredLiability 
            personalInjuryProtection propertyDamageLiability collision comprehensive customerGender 
            customerIncomeGroup customerRegion customerMaritalStatus`
}

export { PolicySchema }