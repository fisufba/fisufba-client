import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { FormService, Form } from '../base.service';
import { AuthService } from '../../auth/auth.service';
import { MessageService } from '../../message.service';

export enum StructureAndFunction {
  Goniometry = "Goniometria",
  ArshworthScale = "Escala de Ashworth",
  SensoryEvaluation = "Avaliação Sensorial",
  RespiratoryMuscleStrength = "Força Muscular Respiratória",
  Spirometry = "Espirometria",
  PeakFlow = "Peak-Flow",
  Ventilometry = "Ventilometria",
  PainEvaluation = "Avaliação da Dor",
  MuscleStrength = "Força Muscular",
  Baropodometry = "Baropodometria",
  Electromyography = "Eletromiografia",
  Biophotogrammetry = "Biofotogrametria",
  Dynamometry = "Dinamometria"
}

export enum ActivityAndParticipation {
  MarchEvaluation = "Avaliação de Marcha",
  SixMWalkTest = "Teste de Caminhada 6M",
  BergsBalanceScale = "Escala de Equilíbrio de Berg",
  FunctionalScopeTest = "Teste do Alcane Funcional",
  TimeUpGo = "Time Up Go (TUG)",
  ComfortableAndFastRunningSpeed = "Velocidade de marcha confortável e rápida (10m)",
  StepTest = "Teste do Degrau",
  QVCysticFibrosis = "QV Fibrose Cística",
  SF36 = "SF-36",
  WHODAS2 = "WHODAS 2.0",
  MIF = "MIF",
  WOMAC = "WOMAC",
  DASH = "DASH",
  LondonScale = "Escala London",
  EORCTQLQC30 = "EORCT QLQ C-30",
  SaintGeorge = "Saint George",
  BarthelsScale = "Escala de Barthel"
}

export interface KineticForm extends Form {
  clinicDiagnostic: string;
  mainComplaint: string;
  functionalComplaint: string;
  clinicalHistory: string;
  functionalHistory: string;
  structureAndFunction: StructureAndFunction[];
  activityAndParticipation: ActivityAndParticipation[];
  physicalFunctionalTestsResults: string | null;
  complementaryExamsResults: string | null;
  deficiencyDiagnosis: string | null;
  activityLimitationDiagnosis: string | null;
  participationRestrictionDiagnosis: string | null;
  environmentFactorsDiagnosis: string | null;
  functionalObjectivesDiagnosis: string[] | null;
  therapeuticPlanDiagnosis: string[] | null;
  reevaluationDates: Date[] | null;
  academicAssessor: string | null;
  preceptorAssessor: string | null;
}

@Injectable({
  providedIn: 'root'
})
export class KineticService extends FormService<KineticForm> {

  constructor(messageService: MessageService, authService: AuthService) {
    super(messageService, authService);
  }

  protected getApiPath(): string {
    return '/forms/kineticfunctionalevaluation';
  }

  protected getFormName(): string {
    return 'kinetic_functional_evaluation';
  }

  protected convertPayloadToData(payload: Object): KineticForm {
    return {
      id: payload["id"],
      clinicDiagnostic: payload["clinic_diagnostic"],
      mainComplaint: payload["main_complaint"],
      functionalComplaint: payload["functional_complaint"],
      clinicalHistory: payload["clinical_history"],
      functionalHistory: payload["functional_history"],
      structureAndFunction: payload["structure_and_function"],
      activityAndParticipation: payload["activity_and_participation"],
      physicalFunctionalTestsResults: payload["physical_functional_tests_results"],
      complementaryExamsResults: payload["complementary_exams_results"],
      deficiencyDiagnosis: payload["deficiency_diagnosis"],
      activityLimitationDiagnosis: payload["activity_limitation_diagnosis"],
      participationRestrictionDiagnosis: payload["participation_restriction_diagnosis"],
      environmentFactorsDiagnosis: payload["environment_factors_diagnosis"],
      functionalObjectivesDiagnosis: payload["functional_objectives_diagnosis"],
      therapeuticPlanDiagnosis: payload["therapeutic_plan_diagnosis"],
      reevaluationDates: payload["reevaluation_dates"].map(s => new Date(s)),
      academicAssessor: payload["academic_assessor"],
      preceptorAssessor: payload["preceptor_assessor"],
    };
  }

  protected convertDataToPayload(data: KineticForm): Object {
    return {
      clinic_diagnostic: data.clinicDiagnostic,
      main_complaint: data.mainComplaint,
      functional_complaint: data.functionalComplaint,
      clinical_history: data.clinicalHistory,
      functional_history: data.functionalHistory,
      structure_and_function: data.structureAndFunction,
      activity_and_participation: data.activityAndParticipation,
      physical_functional_tests_results: data.physicalFunctionalTestsResults,
      complementary_exams_results: data.complementaryExamsResults,
      deficiency_diagnosis: data.deficiencyDiagnosis,
      activity_limitation_diagnosis: data.activityLimitationDiagnosis,
      participation_restriction_diagnosis: data.participationRestrictionDiagnosis,
      environment_factors_diagnosis: data.environmentFactorsDiagnosis,
      functional_objectives_diagnosis: data.functionalObjectivesDiagnosis,
      therapeutic_plan_diagnosis: data.therapeuticPlanDiagnosis,
      reevaluation_dates: data.reevaluationDates.map(d => d.toISOString().split('T')[0]),
      academic_assessor: data.academicAssessor,
      preceptor_assessor: data.preceptorAssessor,
    }
  }
}
