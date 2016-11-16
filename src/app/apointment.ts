export class Apointment {
  private petName: string;
  private petOwner: string;
  private aptDate: string;
  private aptTime: string;
  private aptNotes: string;

  public setApt(petName: string, petOwner: string, aptDate: string, aptTime: string, aptNotes: string) {
    this.petName = petName;
    this.petOwner = petOwner;
    this.aptDate = aptDate;
    this.aptTime = aptTime;
    this.aptNotes = aptNotes;
  }

  public getPetName(petName : string) {
    return this.petName;
  }

}
