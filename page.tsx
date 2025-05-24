
'use client';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { format } from "date-fns";

const preparation = [
  "Lire le résumé Allen Carr + noter chaque cigarette fumée (raison, moment)",
  "Remettre en question les croyances sur le tabac + répéter une affirmation positive",
  "Faire une méditation courte + lister les avantages d'être non-fumeur",
  "Visualisation guidée + fixer une date d'arrêt",
  "Nettoyage de l'environnement + liste des alternatives à la cigarette",
  "Dernière journée de cigarette, fumer en pleine conscience + relire le guide",
  "Jour J : arrêt total du tabac, activités plaisir, marche, respiration profonde"
];

const routine = [
  "Respiration 3-4-5, marche 10 min, boisson fraîche, journal de gratitude",
  "Playlist positive, appel à un proche de soutien",
  "10 min d’exercice, méditation calme",
  "Lire un témoignage inspirant de sevrage",
  "Activité plaisir, bien s'hydrater",
  "Écrire une lettre à soi-même du futur, non-fumeur depuis 1 mois",
  "Lister des projets ou envies avec l'argent économisé"
];

export default function RoutineTabacMobile() {
  const today = new Date();
  const [dayOffset, setDayOffset] = useState(0);
  const isPrep = dayOffset < 7;
  const task = isPrep ? preparation[dayOffset] : routine[(dayOffset - 7) % routine.length];

  return (
    <div className="p-4 space-y-4 max-w-md mx-auto">
      <h1 className="text-xl font-bold text-center">Programme de Sevrage Tabac</h1>
      <Card>
        <CardContent className="p-4 space-y-2">
          <p className="text-sm text-muted-foreground">{format(today, 'PPP')}</p>
          <h2 className="text-lg font-semibold">Jour {dayOffset + 1}</h2>
          <p>{task}</p>
        </CardContent>
      </Card>
      <div className="flex justify-between">
        <Button variant="outline" onClick={() => setDayOffset(Math.max(0, dayOffset - 1))}>Précédent</Button>
        <Button onClick={() => setDayOffset(dayOffset + 1)}>Suivant</Button>
      </div>
    </div>
  );
}
