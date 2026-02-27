import { useState, useEffect } from 'react';

const API_BASE_URL = import.meta.env.PROD ? '' : 'http://localhost:8000';

export interface CardData {
    id: number;
    title: string;
    description: string;
    tag: string;
    link_url: string | null;
    image_url: string | null;
    career_id: number;
    section_id: number;
    sort_order: number;
    is_active: boolean;
}

export function useCards(careerSlug: string, sectionSlug: string) {
    const [cards, setCards] = useState<CardData[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        async function fetchCards() {
            if (!careerSlug || !sectionSlug) {
                setCards([]);
                setIsLoading(false);
                return;
            }

            try {
                setIsLoading(true);
                const response = await fetch(`${API_BASE_URL}/api/cards?career_slug=${careerSlug}&section_slug=${sectionSlug}`);
                if (!response.ok) {
                    throw new Error('Failed to fetch cards');
                }
                const data = await response.json();
                setCards(data);
                setError(null);
            } catch (err: any) {
                console.error(`Error fetching cards for ${careerSlug}/${sectionSlug}:`, err);
                setError(err.message);
                setCards([]);
            } finally {
                setIsLoading(false);
            }
        }

        fetchCards();
    }, [careerSlug, sectionSlug]);

    return { cards, isLoading, error };
}
