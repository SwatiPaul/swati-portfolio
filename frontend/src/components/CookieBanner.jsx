import React, { useEffect, useState } from 'react';
import { Cookie, X } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from './ui/dialog';
import { Switch } from './ui/switch';
import { Button } from './ui/button';

const KEY = 'swati_cookie_prefs_v1';

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);
  const [open, setOpen] = useState(false);
  const [prefs, setPrefs] = useState({ analytics: true, marketing: false });

  useEffect(() => {
    const stored = localStorage.getItem(KEY);
    if (!stored) setVisible(true);
  }, []);

  const save = (value) => {
    localStorage.setItem(KEY, JSON.stringify(value));
    setVisible(false);
    setOpen(false);
  };

  if (!visible) return null;

  return (
    <>
      <div className="fixed bottom-20 right-5 z-50 max-w-[380px] w-[calc(100vw-2.5rem)] bg-[#f2ead8] text-[#1a0a12] rounded-2xl shadow-2xl border border-[#e2d9bd] overflow-hidden animate-in fade-in slide-in-from-bottom-4 duration-500">
        <div className="flex items-center justify-between px-5 pt-4">
          <div className="flex items-center gap-2">
            <Cookie size={16} className="text-[#8b6a3f]" />
            <span className="text-[13px] font-medium tracking-wider-1">Cookie Preferences</span>
          </div>
          <button onClick={() => setVisible(false)} className="text-[#8b6a3f] hover:text-[#1a0a12]" aria-label="Close"><X size={16} /></button>
        </div>
        <p className="px-5 pt-2 pb-4 text-[13px] text-[#4a3a2a] leading-relaxed">
          I use cookies to improve the website and analyze visitor numbers.
        </p>
        <div className="flex items-center gap-2 px-4 pb-4">
          <Button size="sm" onClick={() => save({ analytics: true, marketing: true })} className="flex-1 bg-[#1a0a12] hover:bg-[#2a0e1c] text-[#f2ead8] rounded-full text-[12px] tracking-wider-1">Accept all</Button>
          <Button size="sm" variant="ghost" onClick={() => save({ analytics: false, marketing: false })} className="flex-1 text-[#1a0a12] hover:bg-[#e2d9bd] rounded-full text-[12px] tracking-wider-1">Reject all</Button>
          <Button size="sm" variant="outline" onClick={() => setOpen(true)} className="flex-1 border-[#c6b895] text-[#1a0a12] hover:bg-[#e2d9bd] rounded-full text-[12px] tracking-wider-1">Settings</Button>
        </div>
      </div>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="bg-[#f2ead8] text-[#1a0a12] border-[#e2d9bd] max-w-lg">
          <DialogHeader>
            <DialogTitle className="font-serif text-2xl">Cookie Settings</DialogTitle>
            <DialogDescription className="text-[#4a3a2a]">
              Choose which categories of cookies you want to allow. You can change your mind any time.
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4 py-2">
            <div className="flex items-start justify-between gap-6 p-4 rounded-xl bg-[#e8dfc0]">
              <div>
                <div className="font-medium">Essential</div>
                <p className="text-sm text-[#4a3a2a] mt-1">Required for the site to work. Cannot be disabled.</p>
              </div>
              <Switch checked disabled />
            </div>
            <div className="flex items-start justify-between gap-6 p-4 rounded-xl bg-[#e8dfc0]">
              <div>
                <div className="font-medium">Analytics</div>
                <p className="text-sm text-[#4a3a2a] mt-1">Helps me understand how the site is used, anonymously.</p>
              </div>
              <Switch checked={prefs.analytics} onCheckedChange={(v) => setPrefs({ ...prefs, analytics: v })} />
            </div>
            <div className="flex items-start justify-between gap-6 p-4 rounded-xl bg-[#e8dfc0]">
              <div>
                <div className="font-medium">Marketing</div>
                <p className="text-sm text-[#4a3a2a] mt-1">Used to personalize outreach and measure campaigns.</p>
              </div>
              <Switch checked={prefs.marketing} onCheckedChange={(v) => setPrefs({ ...prefs, marketing: v })} />
            </div>
          </div>
          <DialogFooter>
            <Button onClick={() => save(prefs)} className="bg-[#1a0a12] hover:bg-[#2a0e1c] text-[#f2ead8] rounded-full tracking-wider-1">Save preferences</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
}
