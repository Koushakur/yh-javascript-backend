export interface User {
   FormBasicInfo: FormBasicInfo
   FormAddressInfo: FormAddressInfo
}

export interface FormBasicInfo {
   FirstName: string,
   LastName: string,
   FullName: string,
   Email: string,
   ProfileImageURL: string,
   Bio: string,
   Phone: string,
}

export function FormBasicInfoFactory(firstName: string, lastName: string, email: string, profileImageURL: string, bio: string, phone: string): FormBasicInfo {
   return {
      FirstName: firstName,
      LastName: lastName,
      FullName: `${firstName} ${lastName}`,
      Email: email,
      ProfileImageURL: profileImageURL,
      Phone: phone,
      Bio: bio,
   }
}

interface FormAddressInfo {
   Address1: string,
   Address2?: string,
   PostalCode: string,
   City: string,
}