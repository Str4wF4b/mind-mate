import { Component, OnInit, ViewChild } from '@angular/core';
import { IonModal, ModalController } from '@ionic/angular';

@Component({
  selector: 'app-specialists-info',
  templateUrl: './specialists-info.component.html',
  styleUrls: ['./specialists-info.component.scss'],
})
export class SpecialistsInfoComponent implements OnInit {
  @ViewChild('infoModal') infoModal!: IonModal; // reference to the info modal
  psychiatristInfoGer: string =
    '<b>Aufgabe:</b> Diagnostiziert und behandelt psychische Erkrankungen. Psychiater setzen oft Medikamente ein, bieten aber auch bei schweren psychischen Erkrankungen eine psychotherapeutische Therapie an.<br><br>'
    + '<b>Behandlung:</b> Medikamente (z.B. Antidepressiva, Antipsychotika), Psychotherapie.<br><br>'
    + '<b>Ausbildung:</b> Medizinstudium mit anschließender Facharztausbildung in Psychatrie und Psychotherapie.<br><br>';
  psychotherapistInfoGer: string =
    '<b>Aufgabe:</b> Unterstützt und behandelt Personen mit psychischen, psychosomatischen und chronischen Störungen oder Personen mit einer belastenden Lebenssituation oder Lebenskrise.<br><br>'
    + '<b>Behandlung:</b> Gesprächstherapie, Verhaltenstherapie, tiefenpsychologisch fundierte Therapie, Psychoanalytische Therapie, Systematische Therapie.<br><br>'
    + '<b>Ausbildung:</b> Psychologiestudium mit anschließender Ausbildung zum psychologischen Psychotherapeuten oder Medizinstudium mit Facharztausbildung.<br><br>';
  psychologistInfoGer: string =
    '<b>Aufgabe:</b> Untersucht psychische Strukturen und Prozesse, erforscht das menschliche Verhalten und diagnostiziert psychologische Aspekte des menschlichen Auftretens.<br><br>'
    + '<b>Behandlung:</b> Diagnostik.<br><br>'
    + '<b>Ausbildung:</b> Psychologiestudium.<br><br>';
  nonMedicalpractitionerInPsychotherapyInfoGer: string =
    '<b>Aufgabe:</b> Beschäftigt sich mit den seelischen und psychosomatischen Prozessen menschlichen Lebens. Kann auch Psychotherapie anbieten, jedoch ohne die tiefe wissenschaftliche und praktische Ausbildung eines psychologischen Psychotherapeuten.<br><br>'
    + '<b>Behandlung:</b> Gesprächstherapie, alternative Therapieansätze.<br><br>'
    + '<b>Ausbildung:</b> Spezielle Ausbildung und Überprüfung beim Gesundheitsamt.<br><br>';
  counsellingInfoGer: string =
    '<b>Aufgabe:</b> Bietet Unterstützung in Krisensituationen, psychosoziale Beratung und Hilfe bei intrapersonellen Problemen im Alltag (z.B. Entscheidungsprobleme, Lebensänderung, Arbeits-Neuorientierung). Sie sind oft tätig in sozialen Einrichtungen, Schulen oder Krankenhäusern.<br><br>'
    + '<b>Behandlung:</b> Beratung, Krisenintervention, Vermittlung an spezialisierte Hilfsangebote.<br><br>'
    + '<b>Ausbildung:</b> Mittlerer Bildungsabschluss (keine spezielle Ausbildung nötig).<br><br>';
  educationalistEducationalCounsellorInfoGer: string =
    '<b>Aufgabe:</b> Unterstützung und Beratung bei Lebensbewältigung, Persönlichkeitsentwicklung, Erziehungsfragen, familiären Problemen oder Schulschwierigkeiten. Sie arbeiten oft präventiv und unterstützen die Entwicklung von Kindern und Jugendlichen. <br><br>'
    + '<b>Behandlung:</b> Beratungsgespräche, Gruppenarbeit, Präventionsprogramme.<br><br>'
    + '<b>Ausbildung:</b> Studium in Sozialer Arbeit, Sozialpädagogik oder Sozial- und Integrationspädagogik.<br><br>';
  coachingLifeCounselingInfoGer: string =
    '<b>Aufgabe:</b> Beraten Personen ohne psychische Störungen oder Erkrankungen in Bereichen wie Persönlichkeitsenwicklung, beruflichliche Hürden oder Lebensplanung.<br><br>'
    + '<b>Behandlung:</b> Coaching-Gespräche, Gruppenberatungen, Planung und Erarbeitung von Lösungsmöglichkeiten.<br><br>'
    + '<b>Ausbildung:</b> Empfohlen wird eine Pädagogik-Bildungsansalt mit anschließenden Fort- und Weiterbildungen (keine spezielle Ausbildung nötig).<br><br>';

  psychiatristInfo: string =
    '<b>Task:</b> Diagnoses and treats mental illnesses. Psychiatrists often use medication, but also offer psychotherapeutic therapy for severe mental illnesses.<br><br>'
    + '<b>Treatment:</b> Medication (e.g. antidepressants, antipsychotics), Psychotherapy. <br><br>'
    + '<b>Education:</b> Medical studies with subsequent specialist training in Psychiatry and Psychotherapy.<br><br>';
  psychotherapistInfo: string =
    '<b>Task:</b> Supports and treats people with psychological, psychosomatic and chronic disorders or people with a challenging life situation or life crisis.<br><br>'
    + '<b>Treatment:</b> Conversational therapy, behavioral therapy, depth psychology-based therapy, psychoanalytic therapy, systematic therapy.<br><br>'
    + '<b>Education:</b> Psychology studies with subsequent training as a psychological psychotherapist or medical studies with specialist training.<br><br>';
  psychologistInfo: string =
    '<b>Task:</b> Examines psychological structures and processes, studies human behavior and diagnoses psychological aspects of the human appearance.<br><br>'
    + '<b>Treatment:</b> Diagnostics.<br><br>'
    + '<b>Education:</b> Psychology studies.<br><br>';
  nonMedicalpractitionerInPsychotherapyInfo: string =
    '<b>Task:</b> Deals with the emotional and psychosomatic problems of human life. Can also offer psychotherapy, but without the in-depth scientific and practical qualifications of a psychological psychotherapist.<br><br>'
    + '<b>Treatment:</b> Conversational therapy, alternative therapy approaches.<br><br>'
    + '<b>Education:</b> Special education and review by the health department.<br><br>';
  counsellingInfo: string =
    '<b>Task:</b> Provides support in crisis situations, psychosocial counselling and help with intrapersonal problems in everyday life (e.g. decision-making problems, life changes, work reorientation). They often work in social institutions, schools or hospitals.<br><br>'
    + '<b>Treatment:</b> Counselling, crisis intervention, referral to specialised support services.<br><br>'
    + '<b>Education:</b> Intermediate level of education (no special education required).<br><br>';
  educationalistEducationalCounsellorInfo: string =
    '<b>Task:</b> Support and counselling for coping with life, personal development, educational issues, family issues or school difficulties. They often work preventively and support the development of children and young people.<br><br>'
    + '<b>Treatment:</b> Counselling sessions, group work, prevention programmes.<br><br>'
    + '<b>Education:</b> Studies in social work, social pedagogy or social and integration pedagogy.<br><br>';
  coachingLifeCounselingInfo: string =
    '<b>Task:</b> Counselling people without mental disorders or illnesses in areas such as personality development, career challenges or life management.<br><br>'
    + '<b>Treatment:</b> Coaching sessions, group counselling, planning and development of problem solving options.<br><br>'
    + '<b>Education:</b> An pedagogy educational establishment with subsequent further and advanced training is recommended (no special education required).<br><br>';

  //sourcePsychiatrist: string = 'https://approbatio.de/facharztrichtungen/psychiater/';
  //sourcePsychotherapist: string = 'https://minddoc.de/magazin/psychotherapie-verfahren/';
  //sourceNonMedicalPractitionerInPsychotherapy: string = 'https://heilpraktiker-akademie.de/heilpraktiker-psychotherapie/'; // nur Heilpraktiker
  sourceOthers: string = 'https://www.berufslexikon.at/berufe/'; // general source for mental health professions (also psychotherapist)

  // List of professions with related information, display status and sources
  types: { name: string, info: string, showInfo: boolean, sources: string }[] = [
    { name: 'Psychiatrist', info: this.psychiatristInfo, showInfo: false, sources: 'https://approbatio.de/facharztrichtungen/psychiater/' },
    { name: 'Psychotherapist', info: this.psychotherapistInfo, showInfo: false, sources: 'https://minddoc.de/magazin/psychotherapie-verfahren/, https://www.berufslexikon.at/berufe/2271-PsychotherapeutIn/' },
    { name: 'Psychologist', info: this.psychologistInfo, showInfo: false, sources: 'https://www.berufslexikon.at/berufe/2268-Psychologe~Psychologin/' },
    { name: 'Non-medical Practitioner in Psychotherapy', info: this.nonMedicalpractitionerInPsychotherapyInfo, showInfo: false, sources: 'https://heilpraktiker-akademie.de/heilpraktiker-psychotherapie/' },
    { name: 'Counselling', info: this.counsellingInfo, showInfo: false, sources: 'https://vpsyb.org/berufsbild/, https://www.psychologie-studieren.de/weiterbildung/psychologischer-berater/' },
    { name: 'Educationalist & Educational Counsellors', info: this.educationalistEducationalCounsellorInfo, showInfo: false, sources: 'https://www.berufslexikon.at/berufe/2260-Sozialpaedagoge~Sozialpaedagogin/' },
    { name: 'Coaching & Life Counseling', info: this.coachingLifeCounselingInfo, showInfo: false, sources: 'https://www.berufslexikon.at/berufe/2081-LebensberaterIn-SozialberaterIn/' }
  ]

  /**
   * Constructor for the component, initializes the class variables.
   * 
   * @param modalController The modal controller to manage modals in this component.
   */
  constructor(private modalController: ModalController) { }

  ngOnInit() { }

  /**
   * Closes the modal containing information about the profession.
   */
  closeInfoModal() {
    this.modalController.dismiss();
  }

  /**
   * Toggles the visibility of the information for a specific profession.
   * 
   * @param type The profession object containing its details and visibility status.
   */
  toggleInfo(type: { name: string, info: string, showInfo: boolean, sources: string }) {
    type.showInfo = !type.showInfo;
  }

  /**
   * Formats the information text by making certain keywords bold.
   * 
   * @param info The information text to be formatted.
   * @returns The formatted text with bolded keywords.
   */
  formatText(info: string): string {
    return info.replace(/(Aufgabe|Behandlung|Ausbildung)/g, '<b>$1</b>');
  }
}
