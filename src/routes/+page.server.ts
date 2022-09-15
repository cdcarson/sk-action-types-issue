import { invalid, type Actions, type ActionResult } from '@sveltejs/kit';

type Invalid = { message: string; lucky: number };
type Success = { message: string; lucky: number };

export const actions: Actions = {
  default: (): ActionResult<Success, Invalid> => {
    const lucky = Math.random();
    if (lucky > 0.499999) {
      return { status: 200, type: 'success', data: { message: 'Yay!', lucky } };
    }
    return invalid(400, { message: 'Boo', lucky });
  }
};
