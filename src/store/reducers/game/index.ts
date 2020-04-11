import { IPlayer } from '../../../types/player';
import { TPhases } from '../../../types/phase';
import { GAME_ACTION_TYPES, TInitGameAction } from '../../actions/game';
import { IAction } from '../../actions/types';

export interface IGameState {
  gameCode: string; // the game join code used
  villageName: string;
  moderator?: IPlayer; // optional as initially there will not be a moderator until one is promoted
  players: IPlayer[];
  phase: TPhases;
}

export const gameReducer = (
  state: IGameState | null = null, // possibly null, as game is not present before joining
  action: IAction
): IGameState | null => {
  switch (action.type) {
    case GAME_ACTION_TYPES.INIT_GAME:
      return state ? state : { ...(action as TInitGameAction).payload };
    default:
      return state;
  }
};

export default gameReducer;
