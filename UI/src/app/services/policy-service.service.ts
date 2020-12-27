import { Injectable } from '@angular/core';
import { WebServiceService } from './web-service.service';

@Injectable({
  providedIn: 'root'
})
export class PolicyServiceService {

  constructor(private webService: WebServiceService) { }

  getPolicies() {
    return this.webService.get(`v1/policy/scan`);
  }

  getPolicy(policyId: string){
    return this.webService.get(`v1/policy/${policyId}`);
  }

  getByCustomerId(customerId: string){
    return this.webService.get(`v1/policy/customer/${customerId}`);
  }

  getByCustomerRegion(region: string){
    return this.webService.get(`v1/policy/region/${region}`);
  }

  updatePolicy(policyId: string, dateOfPurchase: string, customerId: string, fuel: string, vehicleSegment: string,
                premium: string, bodilyInjuredLiability: boolean, personalInjuryProtection: boolean, propertyDamageLiability: boolean, 
                collision: boolean, comprehensive: boolean, customerGender: boolean, customerIncomeGroup: string,
                customerRegion: string, customerMaritalStatus: boolean){
    return this.webService.patch(`v1/policy/${policyId}`, {
      'policyId': policyId,
      'dateOfPurchase': dateOfPurchase,
      'customerId': customerId,
      'fuel': fuel,
      'vehicleSegment': vehicleSegment,
      'premium': premium,
      'bodilyInjuredLiability': bodilyInjuredLiability,
      'personalInjuryProtection': personalInjuryProtection,
      'propertyDamageLiability': propertyDamageLiability,
      'collision': collision,
      'comprehensive': comprehensive,
      'customerGender': customerGender,
      'customerIncomeGroup': customerIncomeGroup,
      'customerRegion': customerRegion,
      'customerMartialStatus': customerMaritalStatus
    })
  }
}
