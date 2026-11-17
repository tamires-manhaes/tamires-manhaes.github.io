import { I18nProvider } from './i18n-provider';
import { ThemeProvider } from './theme-provider';
import { ToastProvider } from './toast-provider';
import { StackFilterProvider } from './stack-filter-provider';

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider>
      <I18nProvider>
        <ToastProvider>
          <StackFilterProvider>{children}</StackFilterProvider>
        </ToastProvider>
      </I18nProvider>
    </ThemeProvider>
  );
}
