import { shipTypes } from '../constatns/shipsList'
export const getMaxHits = () => {
        let maxHits = 0;
        shipTypes.forEach((ship) => {
          maxHits += ship.hitPoints;
        });
        return maxHits
}



