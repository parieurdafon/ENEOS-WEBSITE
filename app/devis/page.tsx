"use client"

import React, { useState, useEffect } from 'react';
import { CheckCircle2, Home, Building, Store, Phone, Mail, MapPin, ArrowRight, ArrowLeft, Sparkles, Clock, Shield, Calendar, User, FileText, AlertCircle, Check } from 'lucide-react';

// Configuration
const COMPANY = {
  phone: "06 61 07 08 91",
  email: "contact@eneoshabitat.fr"
};

const DIAGNOSTICS = [
  { id: "dpe", label: "DPE", price: 120, icon: "🔥", desc: "Performance Énergétique", mandatory: true },
  { id: "amiante", label: "Amiante", price: 90, icon: "⚠️", desc: "Avant 1997", condition: (year: string) => year && parseInt(year) < 1997 },
  { id: "plomb", label: "Plomb", price: 100, icon: "🎨", desc: "Avant 1949", condition: (year: string) => year && parseInt(year) < 1949 },
  { id: "electricite", label: "Électricité", price: 95, icon: "⚡", desc: "+15 ans" },
  { id: "gaz", label: "Gaz", price: 85, icon: "🔥", desc: "+15 ans" },
  { id: "termites", label: "Termites", price: 80, icon: "🐜", desc: "Zones à risque" },
  { id: "erp", label: "ERP", price: 30, icon: "🌍", desc: "Risques", mandatory: true },
  { id: "carrez", label: "Loi Carrez", price: 70, icon: "📐", desc: "Surface vente", forSale: true },
  { id: "boutin", label: "Loi Boutin", price: 60, icon: "📏", desc: "Surface location", forRent: true },
];

const STEPS_CONFIG = [
  { id: 1, label: "Type de projet", icon: FileText },
  { id: 2, label: "Votre bien", icon: Home },
  { id: 3, label: "Adresse", icon: MapPin },
  { id: 4, label: "Diagnostics", icon: Shield },
  { id: 5, label: "Date souhaitée", icon: Calendar },
  { id: 6, label: "Vos coordonnées", icon: User },
  { id: 7, label: "Informations complémentaires", icon: FileText },
  { id: 8, label: "Récapitulatif", icon: CheckCircle2 }
];

export default function DevisFormPremium() {
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    // Étape 1
    transactionType: "",
    urgence: "",
    
    // Étape 2
    propertyType: "",
    surface: "",
    year: "",
    etages: "",
    pieces: "",
    
    // Étape 3
    address: "",
    city: "",
    postalCode: "",
    complement: "",
    
    // Étape 4
    selectedDiagnostics: [] as string[],
    
    // Étape 5
    datePreference: "",
    timeSlot: "",
    
    // Étape 6
    civility: "",
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    
    // Étape 7
    accesBien: "",
    parking: "",
    message: "",
    contactPreference: "",
  });

  const updateField = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const toggleDiagnostic = (id: string) => {
    setFormData(prev => ({
      ...prev,
      selectedDiagnostics: prev.selectedDiagnostics.includes(id)
        ? prev.selectedDiagnostics.filter(d => d !== id)
        : [...prev.selectedDiagnostics, id]
    }));
  };

  const getFilteredDiagnostics = () => {
    return DIAGNOSTICS.filter(diag => {
      if (diag.condition && !diag.condition(formData.year)) return false;
      if (diag.forSale && formData.transactionType !== "vente") return false;
      if (diag.forRent && formData.transactionType !== "location") return false;
      return true;
    });
  };

  const calculateTotal = () => {
    return formData.selectedDiagnostics.reduce((total, id) => {
      const diag = DIAGNOSTICS.find(d => d.id === id);
      return total + (diag?.price || 0);
    }, 0);
  };

  const canProgress = () => {
    switch(step) {
      case 1: return formData.transactionType && formData.urgence;
      case 2: return formData.propertyType && formData.surface;
      case 3: return formData.address && formData.city && formData.postalCode;
      case 4: return formData.selectedDiagnostics.length > 0;
      case 5: return formData.datePreference;
      case 6: return formData.firstName && formData.lastName && formData.email && formData.phone;
      case 7: return true;
      default: return true;
    }
  };

  const handleSubmit = () => {
    const diagnosticsList = formData.selectedDiagnostics.map(id => {
      const d = DIAGNOSTICS.find(diag => diag.id === id);
      return `- ${d?.label} (${d?.price}€)`;
    }).join('%0D%0A');

    const emailBody = `
DEMANDE DE DEVIS - DIAGNOSTICS IMMOBILIERS
═══════════════════════════════════════════

📋 TYPE DE PROJET
Transaction : ${formData.transactionType === 'vente' ? 'VENTE' : 'LOCATION'}
Urgence : ${formData.urgence}

🏠 LE BIEN
Type : ${formData.propertyType}
Surface : ${formData.surface} m²
Année : ${formData.year || 'Non précisée'}
${formData.pieces ? `Pièces : ${formData.pieces}` : ''}
${formData.etages ? `Étages : ${formData.etages}` : ''}

📍 ADRESSE
${formData.address}
${formData.complement ? formData.complement + '%0D%0A' : ''}${formData.postalCode} ${formData.city}

✅ DIAGNOSTICS SÉLECTIONNÉS (${formData.selectedDiagnostics.length})
${diagnosticsList}

💰 TOTAL ESTIMÉ : ${calculateTotal()}€ TTC

📅 DATE SOUHAITÉE
${formData.datePreference}
${formData.timeSlot ? `Créneau : ${formData.timeSlot}` : ''}

👤 VOS COORDONNÉES
${formData.civility} ${formData.firstName} ${formData.lastName}
📧 ${formData.email}
📞 ${formData.phone}
Préférence contact : ${formData.contactPreference || 'Non précisée'}

ℹ️ INFORMATIONS COMPLÉMENTAIRES
Accès au bien : ${formData.accesBien || 'Non précisé'}
Parking : ${formData.parking || 'Non précisé'}
${formData.message ? `Message : ${formData.message}` : ''}
    `.trim();

    window.location.href = `mailto:${COMPANY.email}?subject=Demande de devis - ${formData.transactionType} ${formData.propertyType}&body=${encodeURIComponent(emailBody)}`;
    setSubmitted(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [step]);

  // Auto-sélection diagnostics obligatoires
  useEffect(() => {
    const mandatory = getFilteredDiagnostics()
      .filter(d => d.mandatory)
      .map(d => d.id);
    
    const missing = mandatory.filter(id => !formData.selectedDiagnostics.includes(id));
    if (missing.length > 0) {
      setFormData(prev => ({
        ...prev,
        selectedDiagnostics: [...new Set([...prev.selectedDiagnostics, ...missing])]
      }));
    }
  }, [formData.year, formData.transactionType]);

  if (submitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-teal-50 py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <button
            onClick={() => { setSubmitted(false); setStep(8); }}
            className="mb-6 px-6 py-3 border-2 border-emerald-700 text-emerald-700 rounded-xl font-semibold hover:bg-emerald-700 hover:text-white transition-all"
          >
            ← Modifier
          </button>

          <div className="text-center mb-8">
            <div className="w-20 h-20 bg-gradient-to-br from-emerald-600 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-4 animate-bounce">
              <CheckCircle2 className="h-10 w-10 text-white" />
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-2">Demande envoyée ! 🎉</h1>
            <p className="text-gray-600">Votre client de messagerie s'est ouvert</p>
          </div>

          <div className="bg-gradient-to-br from-emerald-900 to-teal-900 rounded-2xl p-8 text-white mb-6">
            <div className="text-center mb-6">
              <p className="text-emerald-200 mb-2">Total estimé</p>
              <p className="text-5xl font-bold">{calculateTotal()}€</p>
              <p className="text-emerald-200 text-sm mt-1">TTC</p>
            </div>
            
            <div className="grid grid-cols-3 gap-3 mb-6">
              <div className="bg-white/10 rounded-lg p-3 text-center">
                <Clock className="h-5 w-5 mx-auto mb-1" />
                <p className="text-xs">Rapide</p>
              </div>
              <div className="bg-white/10 rounded-lg p-3 text-center">
                <Shield className="h-5 w-5 mx-auto mb-1" />
                <p className="text-xs">Certifié</p>
              </div>
              <div className="bg-white/10 rounded-lg p-3 text-center">
                <Check className="h-5 w-5 mx-auto mb-1" />
                <p className="text-xs">Garanti</p>
              </div>
            </div>
          </div>

          <a
            href={`tel:${COMPANY.phone.replace(/\s/g, '')}`}
            className="block w-full bg-gradient-to-r from-emerald-600 to-teal-600 text-white py-5 rounded-xl font-bold text-lg text-center hover:shadow-xl transition-all mb-4"
          >
            <Phone className="inline h-6 w-6 mr-2" />
            Appeler : {COMPANY.phone}
          </a>

          <div className="bg-white rounded-xl p-6 shadow-lg">
            <h3 className="font-bold text-lg mb-4">Récapitulatif</h3>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between py-2 border-b">
                <span className="text-gray-600">Transaction</span>
                <span className="font-semibold">{formData.transactionType}</span>
              </div>
              <div className="flex justify-between py-2 border-b">
                <span className="text-gray-600">Bien</span>
                <span className="font-semibold">{formData.propertyType} - {formData.surface}m²</span>
              </div>
              <div className="flex justify-between py-2 border-b">
                <span className="text-gray-600">Adresse</span>
                <span className="font-semibold text-right">{formData.city}</span>
              </div>
              <div className="flex justify-between py-2 border-b">
                <span className="text-gray-600">Diagnostics</span>
                <span className="font-semibold">{formData.selectedDiagnostics.length}</span>
              </div>
              <div className="flex justify-between py-2 font-bold text-lg">
                <span>TOTAL</span>
                <span className="text-emerald-600">{calculateTotal()}€</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-8 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <span className="inline-block bg-orange-500 text-white px-4 py-2 rounded-full text-sm font-bold mb-4">
            Estimation immédiate
          </span>
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            Devis en <span className="text-emerald-600">8 étapes</span>
          </h1>
          <p className="text-gray-600">Simple, rapide et sans engagement</p>
        </div>

        {/* Progress */}
        <div className="mb-8">
          <div className="flex justify-between mb-3">
            {STEPS_CONFIG.map((s, idx) => (
              <div key={s.id} className="flex flex-col items-center" style={{ width: `${100/8}%` }}>
                <div className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold transition-all ${
                  step > s.id ? 'bg-emerald-600 text-white' :
                  step === s.id ? 'bg-emerald-600 text-white ring-4 ring-emerald-200' :
                  'bg-gray-200 text-gray-400'
                }`}>
                  {step > s.id ? <Check className="h-5 w-5" /> : s.id}
                </div>
                <span className={`text-xs mt-1 text-center hidden md:block ${step >= s.id ? 'text-emerald-600 font-semibold' : 'text-gray-400'}`}>
                  {s.label}
                </span>
              </div>
            ))}
          </div>
          <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-emerald-600 to-teal-600 transition-all duration-500"
              style={{ width: `${(step / 8) * 100}%` }}
            />
          </div>
        </div>

        {/* Form */}
        <div className="bg-white rounded-2xl p-4 md:p-6 lg:p-8 shadow-xl">
          
          {/* Étape 1: Type de projet */}
          {step === 1 && (
            <div>
              <h2 className="text-2xl font-bold mb-6">Type de projet</h2>
              
              <div className="mb-6">
                <label className="block font-semibold mb-3">Votre transaction *</label>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { value: "vente", label: "Vente" },
                    { value: "location", label: "Location" }
                  ].map(opt => (
                    <button
                      key={opt.value}
                      type="button"
                      onClick={() => updateField('transactionType', opt.value)}
                      className={`p-3 md:p-4 rounded-xl border-2 font-semibold transition-all ${
                        formData.transactionType === opt.value
                          ? 'border-emerald-600 bg-emerald-50 text-emerald-700'
                          : 'border-gray-200 hover:border-emerald-300'
                      }`}
                    >
                      {opt.label}
                    </button>
                  ))}
                </div>
              </div>

              <div className="mb-6">
                <label className="block font-semibold mb-3">Niveau d'urgence *</label>
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { value: "urgent", label: "Urgent", desc: "< 48h" },
                    { value: "normal", label: "Normal", desc: "Cette semaine" },
                    { value: "planifie", label: "Planifié", desc: "> 1 semaine" }
                  ].map(opt => (
                    <button
                      key={opt.value}
                      type="button"
                      onClick={() => updateField('urgence', opt.value)}
                      className={`p-3 rounded-xl border-2 transition-all ${
                        formData.urgence === opt.value
                          ? 'border-emerald-600 bg-emerald-50'
                          : 'border-gray-200 hover:border-emerald-300'
                      }`}
                    >
                      <div className="font-semibold text-sm">{opt.label}</div>
                      <div className="text-xs text-gray-500">{opt.desc}</div>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Étape 2: Votre bien */}
          {step === 2 && (
            <div>
              <h2 className="text-2xl font-bold mb-6">Caractéristiques du bien</h2>
              
              <div className="mb-6">
                <label className="block font-semibold mb-3">Type de bien *</label>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">

                  {[
                    { value: "maison", label: "Maison", icon: Home },
                    { value: "appartement", label: "Appartement", icon: Building },
                    { value: "autre", label: "Autre", icon: Store }
                  ].map(opt => {
                    const Icon = opt.icon;
                    return (
                      <button
                        key={opt.value}
                        type="button"
                        onClick={() => updateField('propertyType', opt.value)}
                        className={`p-3 md:p-4 rounded-xl border-2 transition-all ${
                          formData.propertyType === opt.value
                            ? 'border-emerald-600 bg-emerald-50'
                            : 'border-gray-200 hover:border-emerald-300'
                        }`}
                      >
                        <Icon className={`h-6 w-6 md:h-8 md:w-8 mx-auto mb-2 ${formData.propertyType === opt.value ? 'text-emerald-600' : 'text-gray-400'}`} />
                        <div className="font-semibold text-sm">{opt.label}</div>
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-3 md:gap-4">
                <div>
                  <label className="block font-semibold mb-2">Surface (m²) *</label>
                  <input
                    type="number"
                    placeholder="Ex: 85"
                    value={formData.surface}
                    onChange={(e) => updateField('surface', e.target.value)}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-emerald-600 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block font-semibold mb-2">Année de construction</label>
                  <input
                    type="number"
                    placeholder="Ex: 1995"
                    value={formData.year}
                    onChange={(e) => updateField('year', e.target.value)}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-emerald-600 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block font-semibold mb-2">Nombre de pièces</label>
                  <input
                    type="number"
                    placeholder="Ex: 4"
                    value={formData.pieces}
                    onChange={(e) => updateField('pieces', e.target.value)}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-emerald-600 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block font-semibold mb-2">Nombre d'étages</label>
                  <input
                    type="number"
                    placeholder="Ex: 2"
                    value={formData.etages}
                    onChange={(e) => updateField('etages', e.target.value)}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-emerald-600 focus:outline-none"
                  />
                </div>
              </div>
            </div>
          )}

          {/* Étape 3: Adresse */}
          {step === 3 && (
            <div>
              <h2 className="text-2xl font-bold mb-6">Localisation du bien</h2>
              
              <div className="space-y-4">
                <div>
                  <label className="block font-semibold mb-2">Adresse *</label>
                  <input
                    type="text"
                    placeholder="Numéro et nom de rue"
                    value={formData.address}
                    onChange={(e) => updateField('address', e.target.value)}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-emerald-600 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block font-semibold mb-2">Complément d'adresse</label>
                  <input
                    type="text"
                    placeholder="Bâtiment, étage, porte..."
                    value={formData.complement}
                    onChange={(e) => updateField('complement', e.target.value)}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-emerald-600 focus:outline-none"
                  />
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-semibold mb-2">Code postal *</label>
                    <input
                      type="text"
                      placeholder="33000"
                      value={formData.postalCode}
                      onChange={(e) => updateField('postalCode', e.target.value)}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-emerald-600 focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block font-semibold mb-2">Ville *</label>
                    <input
                      type="text"
                      placeholder="Bordeaux"
                      value={formData.city}
                      onChange={(e) => updateField('city', e.target.value)}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-emerald-600 focus:outline-none"
                    />
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Étape 4: Diagnostics */}
          {step === 4 && (
            <div>
              <h2 className="text-2xl font-bold mb-4">Sélection des diagnostics</h2>
              <p className="text-gray-600 mb-6">Les diagnostics obligatoires sont pré-sélectionnés</p>
              
              <div className="space-y-3">
                {getFilteredDiagnostics().map(diag => (
                  <label
                    key={diag.id}
                    className={`flex items-center justify-between p-4 rounded-xl border-2 cursor-pointer transition-all ${
                      formData.selectedDiagnostics.includes(diag.id)
                        ? 'border-emerald-600 bg-emerald-50'
                        : 'border-gray-200 hover:border-emerald-300'
                    } ${diag.mandatory ? 'opacity-75' : ''}`}
                  >
                    <div className="flex items-center gap-3 flex-1">
                      <input
                        type="checkbox"
                        checked={formData.selectedDiagnostics.includes(diag.id)}
                        onChange={() => !diag.mandatory && toggleDiagnostic(diag.id)}
                        disabled={diag.mandatory}
                        className="w-5 h-5 text-emerald-600 rounded"
                      />
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="text-xl">{diag.icon}</span>
                          <span className="font-semibold">{diag.label}</span>
                          {diag.mandatory && <span className="text-xs bg-orange-500 text-white px-2 py-0.5 rounded-full">Obligatoire</span>}
                        </div>
                        <p className="text-sm text-gray-500">{diag.desc}</p>
                      </div>
                    </div>
                    <span className="font-bold text-emerald-600 ml-4">{diag.price}€</span>
                  </label>
                ))}
              </div>

              {formData.selectedDiagnostics.length > 0 && (
                <div className="mt-6 bg-emerald-50 border-2 border-emerald-200 rounded-xl p-4">
                  <div className="flex justify-between items-center">
                    <span className="font-semibold">Total estimé ({formData.selectedDiagnostics.length} diagnostic{formData.selectedDiagnostics.length > 1 ? 's' : ''})</span>
                    <span className="text-2xl font-bold text-emerald-600">{calculateTotal()}€</span>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Étape 5: Date souhaitée */}
          {step === 5 && (
            <div>
              <h2 className="text-2xl font-bold mb-6">Date d'intervention souhaitée</h2>
              
              <div className="mb-6">
                <label className="block font-semibold mb-2">Date *</label>
                <input
                  type="date"
                  value={formData.datePreference}
                  onChange={(e) => updateField('datePreference', e.target.value)}
                  min={new Date().toISOString().split('T')[0]}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-emerald-600 focus:outline-none"
                />
              </div>

              <div>
                <label className="block font-semibold mb-3">Créneau horaire préféré</label>
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { value: "matin", label: "Matin", desc: "8h-12h" },
                    { value: "aprem", label: "Après-midi", desc: "14h-18h" },
                    { value: "flexible", label: "Flexible", desc: "Toute la journée" }
                  ].map(opt => (
                    <button
                      key={opt.value}
                      type="button"
                      onClick={() => updateField('timeSlot', opt.value)}
                      className={`p-3 rounded-xl border-2 transition-all ${
                        formData.timeSlot === opt.value
                          ? 'border-emerald-600 bg-emerald-50'
                          : 'border-gray-200 hover:border-emerald-300'
                      }`}
                    >
                      <div className="font-semibold text-sm">{opt.label}</div>
                      <div className="text-xs text-gray-500">{opt.desc}</div>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Étape 6: Coordonnées */}
          {step === 6 && (
            <div>
              <h2 className="text-2xl font-bold mb-6">Vos coordonnées</h2>
              
              <div className="space-y-4">
                <div>
                  <label className="block font-semibold mb-2">Civilité</label>
                  <div className="grid grid-cols-3 gap-3">
                    {["M.", "Mme", "Autre"].map(civ => (
                      <button
                        key={civ}
                        type="button"
                        onClick={() => updateField('civility', civ)}
                        className={`p-3 rounded-xl border-2 font-semibold transition-all ${
                          formData.civility === civ
                            ? 'border-emerald-600 bg-emerald-50'
                            : 'border-gray-200 hover:border-emerald-300'
                        }`}
                      >
                        {civ}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-semibold mb-2">Prénom *</label>
                    <input
                      type="text"
                      placeholder="Votre prénom"
                      value={formData.firstName}
                      onChange={(e) => updateField('firstName', e.target.value)}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-emerald-600 focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block font-semibold mb-2">Nom *</label>
                    <input
                      type="text"
                      placeholder="Votre nom"
                      value={formData.lastName}
                      onChange={(e) => updateField('lastName', e.target.value)}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-emerald-600 focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block font-semibold mb-2">Email *</label>
                  <input
                    type="email"
                    placeholder="votre@email.fr"
                    value={formData.email}
                    onChange={(e) => updateField('email', e.target.value)}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-emerald-600 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block font-semibold mb-2">Téléphone *</label>
                  <input
                    type="tel"
                    placeholder="06 00 00 00 00"
                    value={formData.phone}
                    onChange={(e) => updateField('phone', e.target.value)}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-emerald-600 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block font-semibold mb-3">Moyen de contact préféré</label>
                  <div className="grid grid-cols-2 gap-3">
                    {[
                      { value: "telephone", label: "Téléphone" },
                      { value: "email", label: "Email" }
                    ].map(opt => (
                      <button
                        key={opt.value}
                        type="button"
                        onClick={() => updateField('contactPreference', opt.value)}
                        className={`p-3 rounded-xl border-2 font-semibold transition-all ${
                          formData.contactPreference === opt.value
                            ? 'border-emerald-600 bg-emerald-50'
                            : 'border-gray-200 hover:border-emerald-300'
                        }`}
                      >
                        {opt.label}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Étape 7: Informations complémentaires */}
          {step === 7 && (
            <div>
              <h2 className="text-2xl font-bold mb-6">Informations complémentaires</h2>
              
              <div className="space-y-4">
                <div>
                  <label className="block font-semibold mb-2">Accès au bien</label>
                  <select
                    value={formData.accesBien}
                    onChange={(e) => updateField('accesBien', e.target.value)}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-emerald-600 focus:outline-none"
                  >
                    <option value="">Sélectionnez...</option>
                    <option value="libre">Accès libre</option>
                    <option value="cles">Remise des clés</option>
                    <option value="present">Je serai présent(e)</option>
                    <option value="gardien">Via gardien/concierge</option>
                  </select>
                </div>

                <div>
                  <label className="block font-semibold mb-2">Parking disponible</label>
                  <div className="grid grid-cols-3 gap-3">
                    {[
                      { value: "oui", label: "Oui" },
                      { value: "non", label: "Non" },
                      { value: "rue", label: "Rue" }
                    ].map(opt => (
                      <button
                        key={opt.value}
                        type="button"
                        onClick={() => updateField('parking', opt.value)}
                        className={`p-3 rounded-xl border-2 font-semibold transition-all ${
                          formData.parking === opt.value
                            ? 'border-emerald-600 bg-emerald-50'
                            : 'border-gray-200 hover:border-emerald-300'
                        }`}
                      >
                        {opt.label}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block font-semibold mb-2">Message complémentaire</label>
                  <textarea
                    rows={5}
                    placeholder="Précisions, contraintes, questions..."
                    value={formData.message}
                    onChange={(e) => updateField('message', e.target.value)}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-emerald-600 focus:outline-none resize-none"
                  />
                </div>
              </div>
            </div>
          )}

          {/* Étape 8: Récapitulatif */}
          {step === 8 && (
            <div>
              <h2 className="text-2xl font-bold mb-6">Récapitulatif de votre demande</h2>
              
              <div className="space-y-6">
                <div className="bg-gray-50 rounded-xl p-5">
                  <h3 className="font-bold mb-3 text-emerald-700">📋 Projet</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Transaction</span>
                      <span className="font-semibold">{formData.transactionType}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Urgence</span>
                      <span className="font-semibold">{formData.urgence}</span>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-xl p-5">
                  <h3 className="font-bold mb-3 text-emerald-700">🏠 Bien</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Type</span>
                      <span className="font-semibold">{formData.propertyType}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Surface</span>
                      <span className="font-semibold">{formData.surface} m²</span>
                    </div>
                    {formData.year && (
                      <div className="flex justify-between">
                        <span className="text-gray-600">Année</span>
                        <span className="font-semibold">{formData.year}</span>
                      </div>
                    )}
                    <div className="flex justify-between">
                      <span className="text-gray-600">Adresse</span>
                      <span className="font-semibold text-right">{formData.address}, {formData.postalCode} {formData.city}</span>
                    </div>
                  </div>
                </div>

                <div className="bg-emerald-50 rounded-xl p-5 border-2 border-emerald-200">
                  <h3 className="font-bold mb-3 text-emerald-700">✅ Diagnostics ({formData.selectedDiagnostics.length})</h3>
                  <div className="space-y-2">
                    {formData.selectedDiagnostics.map(id => {
                      const diag = DIAGNOSTICS.find(d => d.id === id);
                      return (
                        <div key={id} className="flex justify-between text-sm">
                          <span>{diag?.icon} {diag?.label}</span>
                          <span className="font-semibold">{diag?.price}€</span>
                        </div>
                      );
                    })}
                    <div className="border-t-2 border-emerald-300 pt-3 mt-3 flex justify-between">
                      <span className="font-bold">TOTAL</span>
                      <span className="text-2xl font-bold text-emerald-600">{calculateTotal()}€</span>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-xl p-5">
                  <h3 className="font-bold mb-3 text-emerald-700">📅 Intervention</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Date souhaitée</span>
                      <span className="font-semibold">{new Date(formData.datePreference).toLocaleDateString('fr-FR')}</span>
                    </div>
                    {formData.timeSlot && (
                      <div className="flex justify-between">
                        <span className="text-gray-600">Créneau</span>
                        <span className="font-semibold">{formData.timeSlot}</span>
                      </div>
                    )}
                  </div>
                </div>

                <div className="bg-gray-50 rounded-xl p-5">
                  <h3 className="font-bold mb-3 text-emerald-700">👤 Contact</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Nom</span>
                      <span className="font-semibold">{formData.civility} {formData.firstName} {formData.lastName}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Email</span>
                      <span className="font-semibold">{formData.email}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Téléphone</span>
                      <span className="font-semibold">{formData.phone}</span>
                    </div>
                  </div>
                </div>

                <div className="bg-blue-50 border-2 border-blue-200 rounded-xl p-4 flex items-start gap-3">
                  <AlertCircle className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-gray-700">
                    En validant ce devis, votre client de messagerie s'ouvrira avec toutes vos informations pré-remplies. 
                    Vous pourrez relire et modifier avant envoi.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Navigation */}
          <div className="flex justify-between mt-8 pt-6 border-t">
            {step > 1 ? (
              <button
                type="button"
                onClick={() => setStep(step - 1)}
                className="px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-xl font-semibold hover:bg-gray-50 transition-all inline-flex items-center gap-2"
              >
                <ArrowLeft className="h-5 w-5" />
                Retour
              </button>
            ) : <div />}

            {step < 8 ? (
              <button
                type="button"
                onClick={() => setStep(step + 1)}
                disabled={!canProgress()}
                className="px-8 py-3 bg-gradient-to-r from-emerald-600 to-teal-600 text-white rounded-xl font-bold hover:shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed inline-flex items-center gap-2"
              >
                Continuer
                <ArrowRight className="h-5 w-5" />
              </button>
            ) : (
              <button
                type="button"
                onClick={handleSubmit}
                className="px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-xl font-bold text-lg hover:shadow-xl transition-all inline-flex items-center gap-2"
              >
                <Sparkles className="h-5 w-5" />
                Envoyer ma demande
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}